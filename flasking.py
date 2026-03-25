from datetime import datetime
from models import Staff, Patient, Surgery, Prescription, Shift, db_session 
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "supersecretkey"

# -------------------------
# Helper function
# -------------------------
def calculate_age(dob):
    today = datetime.today().date()
    return today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))

def get_current_timestamp():
    now = datetime.now()
    return {
        "date": now.strftime("%Y-%m-%d"),
        "time": now.strftime("%H:%M")
    }

def get_most_recent_clock(shift):
    times = []

    def add(entry):
        if entry:
            times.append(f"{entry['date']} {entry['time']}")

    add(shift.clockIn)
    add(shift.lunchClockIn)
    add(shift.lunchClockOut)
    add(shift.clockOut)

    if not times:
        return "--"

    return max(times).split(" ")[1]  # return only HH:MM


def normalize_surgery_id(surgery_id: str):
    # Accepts: 0004, S0004, PR0004
    if surgery_id.startswith("PR"):
        return surgery_id[2:]
    if surgery_id.startswith("S"):
        return surgery_id[1:]
    return surgery_id

def generate_staff_id():
    last_staff = db_session.query(Staff).order_by(Staff.staffID.desc()).first()

    if not last_staff:
        return "ST0001"

    last_num = int(last_staff.staffID.replace("ST", ""))
    new_num = last_num + 1

    return f"ST{new_num:04d}"

def generate_surgery_id():
    last = db_session.query(Surgery).order_by(Surgery.surgeryID.desc()).first()

    if not last:
        return "S0001"

    last_num = int(last.surgeryID.replace("S", ""))
    return f"S{last_num + 1:04d}"


def normalize_surgery_id_input(sid):
    if sid.startswith("S"):
        return sid
    return "S" + sid

SURGERY_MAP = {
    "Orthopedic Surgery": [
        "Arthroscopy", "Orthopedics", "Hip replacement", "Hand surgery"
    ],
    "General Surgery": [
        "Appendectomy", "Bariatric surgery", "Cholecystectomy",
        "General Surgery", "Laparoscopy", "Inguinal hernia repair",
        "Colorectal surgery", "Endoscopy"
    ],
    "Gynecology Surgery": [
        "Caesarean section", "Hysterectomy", "Hysteroscopy"
    ],
    "Specialized surgeries": [
        "Cataract surgery", "Plastic surgery", "Endocrine surgery"
    ],
    "Major Surgery": [
        "Coronary artery bypass surgery", "Cardiothoracic surgery",
        "Neurosurgery", "Vascular surgery", "Breast surgery"
    ]
}
STAFF_GROUPS = {
    "1": [
        ["ST0051","ST0101","ST0151","ST0152"],
        ["ST0052","ST0102","ST0153","ST0154"],
        ["ST0053","ST0103","ST0155","ST0156"]
    ],
    "2": [
        ["ST0054","ST0104","ST0157","ST0158"],
        ["ST0055","ST0105","ST0159","ST0160"],
        ["ST0056","ST0106","ST0161","ST0162"]
    ],
    "3": [
        ["ST0057","ST0107","ST0163","ST0164"],
        ["ST0058","ST0108","ST0165","ST0166"],
        ["ST0059","ST0109","ST0167","ST0168"]
    ],
    "4": [
        ["ST0060","ST0110","ST0169","ST0170"],
        ["ST0061","ST0111","ST0171","ST0172"],
        ["ST0062","ST0112","ST0173","ST0174"]
    ],
    "5": [
        ["ST0063","ST0113","ST0175","ST0176"],
        ["ST0064","ST0114","ST0177","ST0178"],
        ["ST0065","ST0115","ST0179","ST0180"]
    ]
}

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
            # SAVE  FOR THE HOME PAGE! 
            session["staffID"] = staff.staffID
            session["user_name"] = staff.name
            session["role"] = staff.role
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

@app.route("/add-staff", methods=["POST"])
def add_staff():
    data = request.form

    name = data.get("name")
    role = data.get("role")
    password = data.get("password")

    if not name or not role or not password:
        return render_template("staff.html", show_add_form=True, message="All fields required.", message_type="error")

    staff_id = generate_staff_id()

    # Mode logic
    if role == "Nurse":
        mode = "full"
    else:
        mode = "restricted"

    new_staff = Staff(
        staffID=staff_id,
        name=name,
        role=role,
        mode=mode,
        password=password
    )

    db_session.add(new_staff)
    db_session.commit()

    return render_template("staff.html", staff=new_staff, message="Staff added successfully.", message_type="success")

@app.route("/staff", methods=["GET", "POST"])
def staff_page():
    if "staffID" not in session:
        return redirect("/")

    if request.method == "POST":
        action = request.form.get("action")
        search_value = request.form.get("search_value")
        search_type = request.form.get("search_type")

        if search_value and search_type:
            if search_type == "id":
                staff = db_session.query(Staff).filter_by(staffID=search_value).first()
            else:
                staff = db_session.query(Staff).filter(Staff.name.ilike(search_value)).first()

            if staff:
                if action == "update":
                    return render_template("staff.html", staff=staff, show_update_form=True)
                elif action == "remove":
                    return render_template("staff.html", staff=staff, show_remove_confirm=True)
                else:
                    return render_template("staff.html", staff=staff)
            else:
                return render_template("staff.html", show_lookup_form=True, message="Staff not found.", message_type="error")

        if action == "add":
            return render_template("staff.html", show_add_form=True)

        elif action == "lookup":
            return render_template("staff.html", show_lookup_form=True)

        elif action == "update":
            return render_template("staff.html", show_lookup_form=True, update_mode=True)

        elif action == "remove":
            return render_template("staff.html", show_lookup_form=True, remove_mode=True)

    return render_template("staff.html")

@app.route("/update-staff", methods=["POST"])
def update_staff():
    sid = request.form.get("staffID")
    staff = db_session.query(Staff).filter_by(staffID=sid).first()

    if not staff:
        return render_template("staff.html", message="Staff not found.", message_type="error")

    role = request.form["role"]

    staff.name = request.form["name"]
    staff.role = role
    staff.password = request.form["password"]

    # Mode rule
    if role == "Nurse":
        staff.mode = "full"
    else:
        staff.mode = "restricted"

    db_session.commit()

    return render_template("staff.html", staff=staff, message="Staff updated successfully.", message_type="success")

@app.route("/remove-staff", methods=["POST"])
def remove_staff():
    sid = request.form.get("staffID")
    confirm = request.form.get("confirm")

    staff = db_session.query(Staff).filter_by(staffID=sid).first()

    if confirm == "yes" and staff:
        db_session.delete(staff)
        db_session.commit()
        return render_template("staff.html", message="Staff deleted successfully.", message_type="success")

    return render_template("staff.html", message="Deletion cancelled.", message_type="error")


@app.route("/surgeries", methods=["GET", "POST"])
def surgeries():
    if "staffID" not in session:
        return redirect("/")

    action = request.form.get("action")

    if request.method == "POST":

        search_value = request.form.get("search_value")

        if search_value:
            sid = normalize_surgery_id_input(search_value)

            surgery = db_session.query(Surgery).filter_by(surgeryID=sid).first()

            if surgery:
                if action == "update":
                    return render_template("surgeries.html", show_update_form=True, surgery=surgery, surgery_map=SURGERY_MAP)
                elif action == "remove":
                    return render_template("surgeries.html", show_remove_confirm=True, surgery=surgery, surgery_map=SURGERY_MAP)
                else:
                    return render_template("surgeries.html", surgery=surgery, surgery_map=SURGERY_MAP)
            else:
                return render_template("surgeries.html", show_lookup_form=True, message="No surgery found.", message_type="error", surgery_map=SURGERY_MAP)

        if action == "add":
            return render_template("surgeries.html", show_add_form=True, surgery_map=SURGERY_MAP)

        elif action == "lookup":
            return render_template("surgeries.html", show_lookup_form=True, surgery_map=SURGERY_MAP)

        elif action == "update":
            return render_template("surgeries.html", show_lookup_form=True, update_mode=True, surgery_map=SURGERY_MAP)

        elif action == "remove":
            return render_template("surgeries.html", show_lookup_form=True, remove_mode=True, surgery_map=SURGERY_MAP)

    return render_template("surgeries.html", surgery_map=SURGERY_MAP)

@app.route("/add-surgery", methods=["POST"])
def add_surgery():
    data = request.form

    patient_id = data.get("patientID")
    if not patient_id.startswith("P"):
        patient_id = "P" + patient_id

    patient = db_session.query(Patient).filter_by(patientID=patient_id).first()
    if not patient:
        return render_template("surgeries.html", show_add_form=True, message="Invalid Patient ID", message_type="error", surgery_map=SURGERY_MAP)

    surgery_type = data.get("surgeryType")
    surgery_name = data.get("surgeryName")

    if surgery_name not in SURGERY_MAP.get(surgery_type, []):
        return render_template("surgeries.html", show_add_form=True, message="Invalid surgery selection", message_type="error", surgery_map=SURGERY_MAP)

    room = data.get("surgeryRoom")
    group_index = int(data.get("staffGroup"))

    staff_ids = STAFF_GROUPS[room][group_index]

    new_surgery = Surgery(
        surgeryID=generate_surgery_id(),
        patientID=patient_id,
        surgeryRoom=room,
        staffIDs=staff_ids,
        surgeryName=surgery_name,
        surgeryType=surgery_type,
        date=data.get("date"),
        timeScheduled=data.get("timeScheduled"),
        anesthesia=None,
        status="Scheduled"
    )

    db_session.add(new_surgery)
    db_session.commit()

    return render_template("surgeries.html",surgery=new_surgery,message="Surgery added successfully.",message_type="success",surgery_map=SURGERY_MAP)

@app.route("/update-surgery", methods=["POST"])
def update_surgery():
    sid = request.form.get("surgeryID")
    surgery = db_session.query(Surgery).filter_by(surgeryID=sid).first()

    if not surgery:
        return render_template("surgeries.html",
                               message="Surgery not found.",
                               message_type="error",
                               surgery_map=SURGERY_MAP)

    # basic fields
    patient_id = request.form.get("patientID")
    if not patient_id.startswith("P"):
        patient_id = "P" + patient_id

    surgery.patientID = patient_id
    surgery.surgeryRoom = request.form.get("surgeryRoom")
    surgery.surgeryType = request.form.get("surgeryType")
    surgery.surgeryName = request.form.get("surgeryName")
    surgery.date = request.form.get("date")
    surgery.timeScheduled = request.form.get("timeScheduled")
    surgery.status = request.form.get("status")

    surgery.anesthesia = {
        "used": request.form.get("anesthesia_used") == "true",
        "type": request.form.get("anesthesia_type") or None,
        "dosage": request.form.get("anesthesia_dosage") or None
    }
    surgery.checkInDate = request.form.get("checkInDate") or None
    surgery.checkInTime = request.form.get("checkInTime") or None
    surgery.checkOutDate = request.form.get("checkOutDate") or None
    surgery.checkOutTime = request.form.get("checkOutTime") or None

    surgery.recoveryNotes = request.form.get("recoveryNotes") or None

    db_session.commit()

    return render_template("surgeries.html",surgery=surgery,message="Surgery updated successfully.",message_type="success",surgery_map=SURGERY_MAP)

@app.route("/remove-surgery", methods=["POST"])
def remove_surgery():
    sid = normalize_surgery_id_input(request.form.get("surgeryID"))
    confirm = request.form.get("confirm")

    surgery = db_session.query(Surgery).filter_by(surgeryID=sid).first()

    if confirm == "yes" and surgery:
        db_session.delete(surgery)
        db_session.commit()
        return render_template("surgeries.html", message="Surgery deleted.", message_type="success",surgery_map=SURGERY_MAP)

    return render_template("surgeries.html",message="Deletion cancelled.",message_type="error",surgery_map=SURGERY_MAP)


@app.route("/shift", methods=["GET", "POST"])
def shift():
    if "staffID" not in session:
        return redirect("/")

    staff_id = session.get("staffID")

    # Fixed test date as requested
    target_date = "2026-04-12"

    # Get the shift for this staff on that date
    shift = db_session.query(Shift).filter_by(staffID=staff_id,date=target_date).first()

    if not shift:
        return render_template("shift.html", message="No shift found for this date.", message_type="error")

    recent_clock = get_most_recent_clock(shift)

    # Get surgeries assigned to this staff on that date
    surgeries = db_session.query(Surgery).filter(
        Surgery.date == target_date
    ).all()

    # Filter surgeries assigned to this staff (assuming staffIDs stored in JSON or list)
    staff_surgeries = []
    for surgery in surgeries:
        if hasattr(surgery, "staffIDs") and staff_id in (surgery.staffIDs or []):
            staff_surgeries.append(surgery)

    # Sort surgeries by time
    staff_surgeries.sort(key=lambda s: s.timeScheduled)

    return render_template("shift.html",shift=shift,surgeries=staff_surgeries, recent_clock=recent_clock)

@app.route("/clock-in", methods=["POST"])
def clock_in():
    if "staffID" not in session:
        return redirect("/")

    staff_id = session.get("staffID")
    target_date = "2026-04-12"

    shift = db_session.query(Shift).filter_by(
        staffID=staff_id,
        date=target_date
    ).first()

    if shift:
        shift.clockIn = get_current_timestamp()
        db_session.commit()

    return redirect("/shift")


@app.route("/lunch-in", methods=["POST"])
def lunch_in():
    if "staffID" not in session:
        return redirect("/")

    staff_id = session.get("staffID")
    target_date = "2026-04-12"

    shift = db_session.query(Shift).filter_by(
        staffID=staff_id,
        date=target_date
    ).first()

    if shift:
        shift.lunchClockIn = get_current_timestamp()
        db_session.commit()

    return redirect("/shift")


@app.route("/lunch-out", methods=["POST"])
def lunch_out():
    if "staffID" not in session:
        return redirect("/")

    staff_id = session.get("staffID")
    target_date = "2026-04-12"

    shift = db_session.query(Shift).filter_by(
        staffID=staff_id,
        date=target_date
    ).first()

    if shift:
        shift.lunchClockOut = get_current_timestamp()
        db_session.commit()

    return redirect("/shift")


@app.route("/clock-out", methods=["POST"])
def clock_out():
    if "staffID" not in session:
        return redirect("/")

    staff_id = session.get("staffID")
    target_date = "2026-04-12"

    shift = db_session.query(Shift).filter_by(
        staffID=staff_id,
        date=target_date
    ).first()

    if shift:
        shift.clockOut = get_current_timestamp()
        db_session.commit()

    return redirect("/shift")

# -------------------------
# LOGOUT
# -------------------------
@app.route("/logout")
def logout():
    session.pop("staffID", None)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, port=5000)