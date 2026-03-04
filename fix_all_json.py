import json
from datetime import datetime
from models import Staff, Patient, Surgery, Prescription, Shift, session

# ---------------------------
# Helper function to map patient fields
# ---------------------------
def map_patient_fields(data):
    for patient in data:
        # Keep dateOfBirth as model expects, convert string -> date
        if "dateOfBirth" in patient:
            patient["dateOfBirth"] = datetime.strptime(patient["dateOfBirth"], "%Y-%m-%d").date()

        # Flatten contact
        contact = patient.pop("contact", {})
        patient["phone"] = contact.get("phone")
        patient["address"] = contact.get("address")

        # Rename primaryPhysID -> primary_physician_id
        if "primaryPhysID" in patient:
            patient["primary_physician_id"] = patient.pop("primaryPhysID")

        # Flatten medicalHistory
        med_hist = patient.pop("medicalHistory", {})
        patient["allergies"] = ", ".join(med_hist.get("allergies", []))
        patient["conditions"] = ", ".join(med_hist.get("conditions", []))

        # Keep age as-is
        # No removal needed
    return data

# ---------------------------
# Generic JSON loader
# ---------------------------
def load_json(file_path, Model, fix_patient=False):
    with open(file_path, "r") as f:
        data = json.load(f)

    if fix_patient:
        data = map_patient_fields(data)

    for item in data:
        session.add(Model(**item))
    session.commit()
    print(f"Loaded {file_path}")

# ---------------------------
# Clear all tables (reverse dependency order)
# ---------------------------
print("Clearing existing records...")
session.query(Shift).delete()
session.query(Prescription).delete()
session.query(Surgery).delete()
session.query(Patient).delete()
session.query(Staff).delete()
session.commit()
print("All tables cleared.")

# ---------------------------
# Load all JSON files from nosql directory
# ---------------------------
load_json("nosql/staff.json", Staff)
load_json("nosql/patients.json", Patient, fix_patient=True)
load_json("nosql/surgeries.json", Surgery)
load_json("nosql/prescriptions.json", Prescription)
load_json("nosql/shifts.json", Shift)

print("All data loaded successfully!")