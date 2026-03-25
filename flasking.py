from datetime import datetime
from models import Staff, Patient, Surgery, Prescription, db_session 
from flask import Flask, render_template, request, redirect, session
from models import Staff, Patient, db_session  

app = Flask(__name__)
app.secret_key = "supersecretkey"

# -------------------------
# Helper function
# -------------------------
def calculate_age(dob):
    today = datetime.today().date()
    return today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))

def normalize_surgery_id(surgery_id: str):
    # Accepts: 0004, S0004, PR0004
    if surgery_id.startswith("PR"):
        return surgery_id[2:]
    if surgery_id.startswith("S"):
        return surgery_id[1:]
    return surgery_id

# -------------------------
# LOGIN PAGE
# -------------------------
@app.route("/", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        staff_id = request.form.get("staffID")
        password = request.form.get("password")

        staff = db_session.query(Staff).filter_by(staffID=staff_id).first()

        if staff and staff.password == password:
            session["staffID"] = staff.staffID
            return redirect("/home")
        else:
            error = "Invalid Staff ID or Password"

    return render_template("index.html", error=error)


# -------------------------
# HOME PAGE
# -------------------------
@app.route("/home")
def home():
    if "staffID" not in session:
        return redirect("/")
    
    # All code inside the function must be indented 4 spaces
    user_id = session.get("staffID")
    user_role = session.get("role")
    
    # TEMP FIX: Use a date that actually has surgeries in your database!
    # Change this to "2026-03-31" since that's when your data starts
    test_date = "2026-04-07" 
    current_time = "12:00" # A fake time to test the "Red Flag" logic!

    # Query surgeries for that specific test date
    display_surgeries = db_session.query(Surgery).filter(Surgery.date == test_date).order_by(Surgery.timeScheduled).all()
            
    return render_template("home.html", 
                           surgeries = display_surgeries, 
                           current_time = current_time,
                           display_date = test_date)



# -------------------------
# PATIENT PAGE
# -------------------------
@app.route("/patients", methods=["GET", "POST"])
def patients():
    if "staffID" not in session:
        return redirect("/")

    action = request.form.get("action")

    if request.method == "POST":

        search_value = request.form.get("search_value")
        search_type = request.form.get("search_type")

        if search_value and search_type:
            if search_type == "id":
                if not search_value.startswith("P"):
                    search_value = "P" + search_value

                patient = db_session.query(Patient).filter_by(patientID=search_value).first()

            elif search_type == "name":
                patient = db_session.query(Patient)\
                    .filter(Patient.name.ilike(search_value))\
                    .first()

            if patient:
                if request.form.get("action") == "update":
                    return render_template("patients.html", show_update_form=True, patient=patient)
                elif request.form.get("action") == "remove":
                    return render_template("patients.html", show_remove_confirm=True, patient=patient)
                else:
                    return render_template("patients.html", patient=patient)
                    
            else:
                return render_template("patients.html", show_lookup_form=True, message="No patient found.", message_type="error")

        if action == "add":
            return render_template("patients.html", show_add_form=True)

        elif action == "lookup":
            return render_template("patients.html", show_lookup_form=True)

        elif action == "update":
            return render_template("patients.html", show_lookup_form=True, update_mode=True)

        elif action == "remove":
            return render_template("patients.html", show_lookup_form=True, remove_mode=True)

    return render_template("patients.html")


# -------------------------
# ADD PATIENT
# -------------------------
@app.route("/add-patient", methods=["POST"])
def add_patient():
    data = request.form

    required_fields = ["patientID", "name", "dob", "gender", "phone", "address"]
    for field in required_fields:
        if not data.get(field):
            return render_template("patients.html", show_add_form=True,message=f"{field} is required.")

    existing = db_session.query(Patient).filter_by(patientID=data["patientID"]).first()
    if existing:
        return render_template("patients.html", show_add_form=True, message="Patient ID already exists.", message_type="erro")

    dob_obj = datetime.strptime(data["dob"], "%Y-%m-%d").date()

    new_patient = Patient(
        patientID=data["patientID"],
        name=data["name"],
        dob=dob_obj,
        age=calculate_age(dob_obj),
        gender=data["gender"],
        phone=data["phone"],
        address=data["address"],
        allergies=data.get("allergies") or None,
        conditions=data.get("conditions") or None,
        primary_physician_id="ST0001"
    )

    db_session.add(new_patient)
    db_session.commit()

    return render_template("patients.html", patient=new_patient, message="Patient added successfully.", message_type="success")


# -------------------------
# UPDATE PATIENT
# -------------------------
@app.route("/update-patient", methods=["POST"])
def update_patient():
    pid = request.form.get("patientID")
    patient = db_session.query(Patient).filter_by(patientID=pid).first()

    if not patient:
        return render_template("patients.html", message="Patient not found.", message_type="error")

    old_dob = patient.dob
    new_dob = datetime.strptime(request.form["dob"], "%Y-%m-%d").date()

    patient.name = request.form["name"]
    patient.dob = new_dob
    patient.gender = request.form["gender"]
    patient.phone = request.form["phone"]
    patient.address = request.form["address"]
    patient.allergies = request.form.get("allergies") or None
    patient.conditions = request.form.get("conditions") or None

    if new_dob != old_dob:
        patient.age = calculate_age(new_dob)

    db_session.commit()

    return render_template("patients.html", patient=patient, message="Patient updated successfully.", message_type="success")


# -------------------------
# REMOVE PATIENT
# -------------------------
@app.route("/remove-patient", methods=["POST"])
def remove_patient():
    pid = request.form.get("patientID")
    confirm = request.form.get("confirm")

    patient = db_session.query(Patient).filter_by(patientID=pid).first()

    if confirm == "yes" and patient:
        db_session.delete(patient)
        db_session.commit()
        return render_template("patients.html", message="Patient deleted successfully.", message_type="success")

    return render_template("patients.html", message="Deletion cancelled.", message_type="error")


# -------------------------
# OTHER PAGES
# -------------------------
@app.route("/surgeries")
def surgeries():
    if "staffID" not in session:
        return redirect("/")
    return render_template("surgeries.html")


@app.route("/prescriptions", methods=["GET", "POST"])
def prescriptions():
    if "staffID" not in session:
        return redirect("/")

    if request.method == "POST":

        action = request.form.get("action")

        # -------------------------
        # BUTTON ACTIONS
        # -------------------------
        if action == "add":
            return render_template("prescriptions.html", show_add_form=True)

        elif action == "lookup":
            return render_template("prescriptions.html", show_lookup_form=True)

        elif action == "update":
            return render_template("prescriptions.html", show_lookup_form=True)
        
        elif action == "confirm_edit":
            pid = request.form.get("prescriptionID")
            prescription = db_session.query(Prescription).filter_by(prescriptionID=pid).first()
            return render_template("prescriptions.html",prescription=prescription,show_update_form=True)

        elif action == "cancel_edit":
            return render_template("prescriptions.html", show_lookup_form=True)
        # -------------------------
        # LOOKUP LOGIC
        # -------------------------
        search_value = request.form.get("search_value", "").strip()
        lookup_type = request.form.get("lookup_type")

        # -------------------------
        # DIRECT LOOKUP (Prescription / Surgery ID)
        # -------------------------
        if lookup_type == "direct":

            # Normalize to prescription ID
            if search_value.startswith("PR"):
                pid = search_value
            elif search_value.startswith("S"):
                pid = "PR" + search_value[1:]
            else:
                pid = "PR" + search_value

            prescription = db_session.query(Prescription).filter_by(
                prescriptionID=pid
            ).first()

            if not prescription:
                return render_template(
                    "prescriptions.html",
                    show_lookup_form=True,
                    message="No prescription found.",
                    message_type="error"
                )

            # ✅ Always go to update form after lookup
            return render_template(
                "prescriptions.html",
                prescription=prescription,
                show_edit_prompt=True
            )

        # -------------------------
        # PATIENT LOOKUP
        # -------------------------
        elif lookup_type == "patient":

            if search_value.startswith("P"):
                patient = db_session.query(Patient).filter_by(
                    patientID=search_value
                ).first()
            else:
                patient = db_session.query(Patient).filter(
                    Patient.name.ilike(search_value)
                ).first()

            if not patient:
                return render_template(
                    "prescriptions.html",
                    show_lookup_form=True,
                    message="Patient not found.",
                    message_type="error"
                )

            prescriptions = db_session.query(Prescription).filter_by(
                patientID=patient.patientID
            ).all()

            return render_template(
                "prescriptions.html",
                prescription_list=prescriptions,
                show_lookup_form=True
            )

    return render_template("prescriptions.html")

@app.route("/add-prescription", methods=["POST"])
def add_prescription():
    data = request.form

    surgery_id_raw = data.get("surgeryID")
    medication = data.get("medicationName")
    dosage_input = data.get("dosage")
    frequency = data.get("frequency")
    duration = data.get("duration")
    prescribed_by = data.get("prescribedBy")

    # -------------------------
    # Normalize Surgery ID → PR ID
    # -------------------------
    surgery_id = normalize_surgery_id(surgery_id_raw)
    prescription_id = "PR" + surgery_id

    # -------------------------
    # Validate Surgery exists
    # -------------------------
    surgery = db_session.query(Surgery).filter_by(surgeryID=surgery_id_raw).first()
    if not surgery:
        return render_template(
            "prescriptions.html",
            show_add_form=True,
            message="Invalid Surgery ID.",
            message_type="error"
        )

    # -------------------------
    # Extract Patient ID from Surgery
    # -------------------------
    patient_id = surgery.patientID

    # -------------------------
    # Validate Staff ID exists
    # -------------------------
    staff = db_session.query(Staff).filter_by(staffID=prescribed_by).first()
    if not staff:
        return render_template(
            "prescriptions.html",
            show_add_form=True,
            message="Invalid Staff ID.",
            message_type="error"
        )

    # -------------------------
    # Validate prescription uniqueness
    # -------------------------
    existing = db_session.query(Prescription).filter_by(
        prescriptionID=prescription_id
    ).first()

    if existing:
        return render_template(
            "prescriptions.html",
            show_add_form=True,
            message="Prescription already exists for this surgery.",
            message_type="error"
        )

    # -------------------------
    # Format dosage
    # -------------------------
    dosage = f"{dosage_input} mg"

    # -------------------------
    # Create Prescription
    # -------------------------
    new_prescription = Prescription(
        prescriptionID=prescription_id,
        patientID=patient_id,
        surgeryID=surgery_id_raw,
        medicationName=medication,
        dosage=dosage,
        frequency=frequency,
        duration=duration,
        prescribedBy=prescribed_by
    )

    db_session.add(new_prescription)
    db_session.commit()

    return render_template(
        "prescriptions.html",
        prescription=new_prescription,
        message="Prescription added successfully.",
        message_type="success"
    )

@app.route("/update-prescription", methods=["POST"])
def update_prescription():
    pid = request.form.get("prescriptionID")

    prescription = db_session.query(Prescription).filter_by(
        prescriptionID=pid
    ).first()

    if not prescription:
        return render_template(
            "prescriptions.html",
            message="Prescription not found.",
            message_type="error"
        )

    prescription.patientID = request.form["patientID"]
    prescription.surgeryID = request.form["surgeryID"]
    prescription.medicationName = request.form["medicationName"]
    prescription.dosage = request.form["dosage"]
    prescription.frequency = request.form["frequency"]
    prescription.duration = request.form["duration"]
    prescription.prescribedBy = request.form["prescribedBy"]

    db_session.commit()

    return render_template(
        "prescriptions.html",
        prescription=prescription,
        message="Prescription updated successfully.",
        message_type="success"
    )




@app.route("/staff")
def staff():
    if "staffID" not in session:
        return redirect("/")
    return render_template("staff.html")



# -------------------------
# LOGOUT
# -------------------------
@app.route("/logout")
def logout():
    session.pop("staffID", None)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, port=5000)