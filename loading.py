# loading.py

import json
from datetime import datetime
from models import Base, engine, session, Staff, Patient, Surgery, Prescription, Shift


print("Dropping all existing tables...")
Base.metadata.drop_all(engine)

print("Recreating tables...")
Base.metadata.create_all(engine)

print("All tables recreated.")


# -----------------------
# PATIENT MAPPER
# -----------------------
def map_patient_fields(data):

    mapped = []

    for patient in data:

        p = {}

        p["patientID"] = patient.get("patientID")
        p["name"] = patient.get("name")
        p["age"] = patient.get("age")
        p["gender"] = patient.get("gender")

        dob = patient.get("dateOfBirth")
        if dob:
            p["dob"] = datetime.strptime(dob, "%Y-%m-%d").date()

        contact = patient.get("contact", {})

        p["phone"] = contact.get("phone")
        p["address"] = contact.get("address")

        p["primary_physician_id"] = patient.get("primaryPhysID")

        history = patient.get("medicalHistory", {})

        p["allergies"] = ", ".join(history.get("allergies", []))
        p["conditions"] = ", ".join(history.get("conditions", []))

        mapped.append(p)

    return mapped


# -----------------------
# SURGERY MAPPER
# -----------------------
def map_surgery_fields(data):

    mapped = []

    for s in data:

        surgery = {}

        surgery["surgeryID"] = s.get("surgeryID")
        surgery["patientID"] = s.get("patientID")

        surgery["surgeryRoom"] = s.get("surgeryRoom")

        # convert list -> JSON string so SQLite can store it
        staff_ids = s.get("staffIDs", [])
        surgery["staffIDs"] = json.dumps(staff_ids)

        surgery["surgeryName"] = s.get("surgeryName")
        surgery["surgeryType"] = s.get("surgeryType")

        surgery["date"] = s.get("date")
        surgery["timeScheduled"] = s.get("timeScheduled")

        anesthesia = s.get("anesthesia", {})

        surgery["anesthesia_used"] = anesthesia.get("used")
        surgery["anesthesia_type"] = anesthesia.get("type")
        surgery["anesthesia_dosage"] = anesthesia.get("dosage")

        checkin = s.get("checkInTimestamp", {})
        checkout = s.get("checkOutTimestamp", {})

        surgery["checkInDate"] = checkin.get("date")
        surgery["checkInTime"] = checkin.get("time")

        surgery["checkOutDate"] = checkout.get("date")
        surgery["checkOutTime"] = checkout.get("time")

        surgery["recoveryNotes"] = s.get("recoveryNotes")

        surgery["status"] = s.get("status")

        mapped.append(surgery)

    return mapped


# -----------------------
# SHIFT MAPPER
# -----------------------
def map_shift_fields(data):

    mapped = []

    for shift in data:

        s = {}

        s["staffID"] = shift.get("staffID")
        s["date"] = shift.get("date")
        s["startTime"] = shift.get("startTime")
        s["endTime"] = shift.get("endTime")
        s["status"] = shift.get("status")

        # convert surgery list to JSON string
        s["surgeries"] = json.dumps(shift.get("surgeries", []))

        clockin = shift.get("clockIn", {})
        lunchin = shift.get("lunchClockIn", {})
        lunchout = shift.get("lunchClockOut", {})
        clockout = shift.get("clockOut", {})

        s["clockInTime"] = clockin.get("time")
        s["lunchClockInTime"] = lunchin.get("time")
        s["lunchClockOutTime"] = lunchout.get("time")
        s["clockOutTime"] = clockout.get("time")

        mapped.append(s)

    return mapped


# -----------------------
# GENERIC JSON LOADER
# -----------------------
def load_json(file_path, Model, mapper=None):

    with open(file_path, "r") as f:
        data = json.load(f)

    if mapper:
        data = mapper(data)

    model_fields = Model.__table__.columns.keys()

    clean_data = []

    for item in data:
        clean_item = {k: v for k, v in item.items() if k in model_fields}
        clean_data.append(clean_item)

    session.bulk_insert_mappings(Model, clean_data)

    session.commit()

    print(f"Loaded {file_path}")


# -----------------------
# LOAD FILES
# -----------------------

print("Loading staff...")
load_json("nosql/staff.json", Staff)

print("Loading patients...")
load_json("nosql/patients.json", Patient, mapper=map_patient_fields)

print("Loading surgeries...")
load_json("nosql/surgeries.json", Surgery, mapper=map_surgery_fields)

print("Loading prescriptions...")
load_json("nosql/prescriptions.json", Prescription)

print("Loading shifts...")
load_json("nosql/shifts.json", Shift, mapper=map_shift_fields)

print("All data loaded successfully!")