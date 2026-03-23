from flask import Flask, render_template, request, redirect, session
from datetime import datetime
from models import Staff, Patient, db_session

app = Flask(__name__)
app.secret_key = "supersecretkey"

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
    return render_template("home.html")


# -------------------------
# PATIENT PAGE
# -------------------------
@app.route("/patients", methods=["GET", "POST"])
def patients():
    if "staffID" not in session:
        return redirect("/")

    action = request.form.get("action")
    patientID = request.form.get("patientID")

    if request.method == "POST":

        if action == "add":
            return render_template("patients.html", show_add_form=True)

        elif action == "lookup":
            if patientID:
                patient = db_session.query(Patient).filter_by(patientID=patientID).first()
                if patient:
                    return render_template("patients.html", patient=patient)
                return render_template("patients.html", message="No patient found.")
            return render_template("patients.html", show_lookup_form=True)

        elif action == "update":
            if patientID:
                patient = db_session.query(Patient).filter_by(patientID=patientID).first()
                if patient:
                    return render_template("patients.html", show_update_form=True, patient=patient)
                return render_template("patients.html", message="Patient not found.")
            return render_template("patients.html", show_lookup_form=True, update_mode=True)

        elif action == "remove":
            if patientID:
                patient = db_session.query(Patient).filter_by(patientID=patientID).first()
                if patient:
                    return render_template("patients.html", show_remove_confirm=True, patient=patient)
                return render_template("patients.html", message="Patient not found.")
            return render_template("patients.html", show_lookup_form=True, remove_mode=True)

    return render_template("patients.html")


# -------------------------
# ADD PATIENT
# -------------------------
@app.route("/add-patient", methods=["POST"])
def add_patient():
    data = request.form

    required_fields = ["patientID", "name", "dob", "age", "gender", "phone", "address"]
    for field in required_fields:
        if not data.get(field):
            return render_template("patients.html", show_add_form=True,
                                   message=f"{field} is required.")

    existing = db_session.query(Patient).filter_by(patientID=data["patientID"]).first()
    if existing:
        return render_template("patients.html", show_add_form=True,
                               message="Patient ID already exists.")

    # ✅ FIX: convert dob string → date
    dob_obj = datetime.strptime(data["dob"], "%Y-%m-%d").date()

    new_patient = Patient(
        patientID=data["patientID"],
        name=data["name"],
        dob=dob_obj,
        age=int(data["age"]),
        gender=data["gender"],
        phone=data["phone"],
        address=data["address"],
        allergies=data.get("allergies", ""),
        conditions=data.get("conditions", ""),
        primary_physician_id="ST0001"
    )

    db_session.add(new_patient)
    db_session.commit()

    return render_template("patients.html", patient=new_patient,
                           message="Patient added successfully.")


# -------------------------
# UPDATE PATIENT
# -------------------------
@app.route("/update-patient", methods=["POST"])
def update_patient():
    pid = request.form.get("patientID")
    patient = db_session.query(Patient).filter_by(patientID=pid).first()

    if not patient:
        return render_template("patients.html", message="Patient not found.")

    # ✅ FIX: convert dob string → date
    dob_obj = datetime.strptime(request.form["dob"], "%Y-%m-%d").date()

    patient.name = request.form["name"]
    patient.dob = dob_obj
    patient.age = int(request.form["age"])
    patient.gender = request.form["gender"]
    patient.phone = request.form["phone"]
    patient.address = request.form["address"]
    patient.allergies = request.form.get("allergies", "")
    patient.conditions = request.form.get("conditions", "")

    db_session.commit()

    return render_template("patients.html", patient=patient,
                           message="Patient updated successfully.")


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
        return render_template("patients.html", message="Patient deleted successfully.")

    return render_template("patients.html", message="Deletion cancelled.")


# -------------------------
# OTHER PAGES
# -------------------------
@app.route("/surgeries")
def surgeries():
    if "staffID" not in session:
        return redirect("/")
    return render_template("surgeries.html")


@app.route("/prescriptions")
def prescriptions():
    if "staffID" not in session:
        return redirect("/")
    return render_template("prescriptions.html")


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
    app.run(debug=True, port=5001)