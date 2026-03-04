# load_all_data.py
import json
from datetime import datetime
from models import Base, engine, session, Staff, Patient, Surgery, Prescription, Shift

# ---------------------------
# Drop and recreate all tables
# ---------------------------
print("Dropping all existing tables...")
Base.metadata.drop_all(engine)
print("Recreating tables...")
Base.metadata.create_all(engine)
print("All tables recreated.")

# ---------------------------
# Helper function to map patient fields
# ---------------------------
def map_patient_fields(data):
    mapped = []
    for patient in data:
        p = {}
        p["patientID"] = patient.get("patientID")
        p["name"] = patient.get("name")
        p["age"] = patient.get("age")
        p["gender"] = patient.get("gender")
        
        # Convert dateOfBirth -> dob
        dob_str = patient.get("dateOfBirth")
        if dob_str:
            p["dob"] = datetime.strptime(dob_str, "%Y-%m-%d").date()
        
        # Flatten contact
        contact = patient.get("contact", {})
        p["phone"] = contact.get("phone")
        p["address"] = contact.get("address")
        
        # primaryPhysID -> primary_physician_id
        p["primary_physician_id"] = patient.get("primaryPhysID")
        
        # Flatten medicalHistory
        med_hist = patient.get("medicalHistory", {})
        p["allergies"] = ", ".join(med_hist.get("allergies", []))
        p["conditions"] = ", ".join(med_hist.get("conditions", []))
        
        mapped.append(p)
    return mapped

# ---------------------------
# Helper function to map surgery fields
# ---------------------------
def map_surgery_fields(data):
    mapped = []
    for s in data:
        surgery = {}
        surgery["surgeryID"] = s.get("surgeryID")
        surgery["patientID"] = s.get("patientID")
        surgery["surgeonID"] = s.get("surgeonID")  # optional
        surgery["surgeryName"] = s.get("surgeryName")
        surgery["surgeryType"] = s.get("surgeryType")
        surgery["date"] = s.get("date")
        surgery["timeScheduled"] = s.get("timeScheduled")
        
        # Flatten anesthesia
        anesthesia = s.get("anesthesia", {})
        surgery["anesthesia_used"] = anesthesia.get("used")
        surgery["anesthesia_type"] = anesthesia.get("type")
        surgery["anesthesia_dosage"] = anesthesia.get("dosage")
        
        # Flatten checkInTimestamp / checkOutTimestamp
        checkin = s.get("checkInTimestamp", {})
        checkout = s.get("checkOutTimestamp", {})
        surgery["checkInDate"] = checkin.get("date")
        surgery["checkInTime"] = checkin.get("time")
        surgery["checkOutDate"] = checkout.get("date")
        surgery["checkOutTime"] = checkout.get("time")
        
        surgery["recoveryNotes"] = s.get("recoveryNotes")
        mapped.append(surgery)
    return mapped

# ---------------------------
# Generic JSON loader
# ---------------------------
def load_json(file_path, Model, mapper=None):
    with open(file_path, "r") as f:
        data = json.load(f)
    
    if mapper:
        data = mapper(data)
    
    for item in data:
        # Keep only fields that exist in the model
        model_fields = Model.__table__.columns.keys()
        clean_item = {k: v for k, v in item.items() if k in model_fields}
        session.add(Model(**clean_item))
    session.commit()
    print(f"Loaded {file_path}")

# ---------------------------
# Load all JSON files
# ---------------------------
print("Loading staff...")
load_json("nosql/staff.json", Staff)

print("Loading patients...")
load_json("nosql/patients.json", Patient, mapper=map_patient_fields)

print("Loading surgeries...")
load_json("nosql/surgeries.json", Surgery, mapper=map_surgery_fields)

print("Loading prescriptions...")
load_json("nosql/prescriptions.json", Prescription)

print("Loading shifts...")
load_json("nosql/shifts.json", Shift)

print("All data loaded successfully!")