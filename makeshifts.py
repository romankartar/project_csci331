import json
import random
from datetime import datetime, timedelta

# -------------------
# Output paths
# -------------------
SURGERY_FILE = "jsonFiles/surgeries.json"
PRESCRIPTION_FILE = "jsonFiles/prescriptions.json"
STAFF_FILE = "jsonFiles/staff.json"
SHIFTS_FILE = "jsonFiles/shifts.json"

# -------------------
# Configuration
# -------------------
start_date = datetime(2026, 3, 31)
TOTAL_PATIENTS = 210
TOTAL_BEDS = 50

schedule_times = [
    "07:00","09:35","12:25",
    "15:00","17:35","20:25",
    "23:00","01:35","04:25"
]

room_surgery_schedule = {
    1:["Arthroscopy","Orthopedics","Hip replacement","Hand surgery","Arthroscopy","Orthopedics","Hip replacement"],
    2:["Appendectomy","Cholecystectomy","Inguinal hernia repair","Laparoscopy","Bariatric surgery","Colorectal surgery","General surgery"],
    3:["Caesarean section","Hysterectomy","Hysteroscopy","Caesarean section","Hysterectomy","Hysteroscopy","Caesarean section"],
    4:["Cataract surgery","Plastic surgery","Endocrine surgery","Cataract surgery","Plastic surgery","Endoscopy","Cataract surgery"],
    5:["Coronary artery bypass surgery","Neurosurgery","Cardiothoracic surgery","Vascular surgery","Breast surgery","Cardiothoracic surgery","Neurosurgery"]
}

surgery_types = {
    "Arthroscopy":"Orthopedic Surgery",
    "Orthopedics":"Orthopedic Surgery",
    "Hip replacement":"Orthopedic Surgery",
    "Hand surgery":"Orthopedic Surgery",

    "Appendectomy":"General Surgery",
    "Bariatric surgery":"General Surgery",
    "Cholecystectomy":"General Surgery",
    "General surgery":"General Surgery",
    "Laparoscopy":"General Surgery",
    "Inguinal hernia repair":"General Surgery",
    "Colorectal surgery":"General Surgery",
    "Endoscopy":"General Surgery",

    "Caesarean section":"Gynecology Surgery",
    "Hysterectomy":"Gynecology Surgery",
    "Hysteroscopy":"Gynecology Surgery",

    "Cataract surgery":"Specialized Surgery",
    "Plastic surgery":"Specialized Surgery",
    "Endocrine surgery":"Specialized Surgery",

    "Coronary artery bypass surgery":"Major Surgery",
    "Cardiothoracic surgery":"Major Surgery",
    "Neurosurgery":"Major Surgery",
    "Vascular surgery":"Major Surgery",
    "Breast surgery":"Major Surgery"
}

anesthesia_types = ["General","Regional","Local","Sedation"]

recovery_notes = [
    "Patient recovered well with no complications.",
    "Stable recovery and vital signs normal.",
    "Patient responding well post surgery.",
    "Recovery progressing normally."
]

medication_options = {
    "Orthopedic Surgery": ["Amoxicillin", "Ibuprofen", "Diclofenac"],
    "General Surgery": ["Amoxicillin", "Metronidazole", "Paracetamol"],
    "Gynecology Surgery": ["Amoxicillin", "Ibuprofen", "Metronidazole"],
    "Specialized Surgery": ["Cefuroxime", "Paracetamol", "Diclofenac"],
    "Major Surgery": ["Ceftriaxone", "Morphine", "Paracetamol"]
}

frequency_options = [
    "{} times daily",
    "every {} hours",
    "{} times for {} days"
]

prescribers = [f"ST{d:04}" for d in range(1, 51)]

# -------------------
# Random name pools
# -------------------
first_names = [
    "James","Liam","Noah","Olivia","Emma","Ava","Sophia","Mason","Lucas","Ethan",
    "Isabella","Mia","Amelia","Harper","Evelyn","Logan","Benjamin","Elijah","Henry","Alexander"
]

last_names = [
    "Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez",
    "Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin"
]

def random_name():
    return f"{random.choice(first_names)} {random.choice(last_names)}"

# -------------------
# Helpers
# -------------------
beds = {i: datetime(2000, 1, 1) for i in range(1, TOTAL_BEDS + 1)}
patient_counter = 1
surgery_counter = 1

def random_dose():
    return f"{round(random.uniform(0.5,2.5),1)}mg/kg"

def find_available_bed(checkin_time):
    for bed, free_time in beds.items():
        if free_time <= checkin_time:
            return bed
    return min(beds, key=beds.get)

def get_patient_id():
    global patient_counter
    patient_id = f"P{((patient_counter - 1) % TOTAL_PATIENTS) + 1:09}"
    patient_counter += 1
    return patient_id

# -------------------
# Create Staff Teams
# -------------------
teams = {}
staff_list = []
staff_shift_map = {}

surgeon = 51
anesth = 101
nurse = 151

for room in range(1,6):
    teams[room] = []
    for _ in range(3):
        team = [f"ST{surgeon:04}", f"ST{anesth:04}", f"ST{nurse:04}", f"ST{nurse+1:04}"]
        teams[room].append(team)
        surgeon += 1
        anesth += 1
        nurse += 2

# -------------------
# Staff generation
# -------------------
for i in range(1, 231):

    role = "Nurse"

    if i <= 50:
        role = "Family Doctor"
    elif i <= 100:
        role = "Lead Surgeon"
    elif i <= 150:
        role = "Anesthesiologist"

    password = f"Hospital.{i:04}"

    if role == "Nurse":
        password = "Hospital.1111"

    staff_list.append({
        "staffID": f"ST{i:04}",
        "name": random_name(),
        "role": role,
        "mode": "restricted",
        "password": password
    })

# -------------------
# Shift helper
# -------------------
def add_shift(staffID, date, start, end, surgeryID, timeScheduled, status):

    if staffID not in staff_shift_map:
        staff_shift_map[staffID] = []

    # check if shift already exists for that day and time
    for shift in staff_shift_map[staffID]:
        if shift["date"] == date and shift["startTime"] == start:
            shift["surgeries"].append({
                "surgeryID": surgeryID,
                "scheduledTime": timeScheduled
            })
            return

    # otherwise create new shift
    staff_shift_map[staffID].append({
        "staffID": staffID,
        "date": date,
        "status": status,
        "startTime": start,
        "endTime": end,
        "surgeries":[
            {
                "surgeryID": surgeryID,
                "scheduledTime": timeScheduled
            }
        ]
    })

# -------------------
# Generate Surgeries
# -------------------
surgeries = []

# Week 1 Completed Surgeries
for day in range(7):

    date = start_date + timedelta(days=day)

    for room in range(1,6):

        surgery_name = room_surgery_schedule[room][day]
        surgery_type = surgery_types[surgery_name]

        for team_index in range(3):

            staff = teams[room][team_index]

            for s in range(3):

                time_str = schedule_times[team_index*3+s]

                time_obj = datetime.strptime(time_str,"%H:%M").time()
                scheduled = datetime.combine(date.date(), time_obj)

                patientID = get_patient_id()
                surgeryID = f"S{surgery_counter:04}"
                surgery_counter += 1

                checkin = scheduled - timedelta(minutes=random.randint(15,90))
                checkout = scheduled + timedelta(minutes=random.randint(120,240))

                bed = find_available_bed(checkin)
                beds[bed] = checkout

                anesthesia_used = random.choice([True, True, True, False])

                anesthesia = {
                    "used": anesthesia_used,
                    "type": random.choice(anesthesia_types) if anesthesia_used else None,
                    "dosage": random_dose() if anesthesia_used else None
                }

                surgeries.append({
                    "surgeryID": surgeryID,
                    "patientID": patientID,
                    "surgeryRoom": str(room),
                    "surgeryName": surgery_name,
                    "surgeryType": surgery_type,
                    "date": date.strftime("%Y-%m-%d"),
                    "timeScheduled": time_str,
                    "staffIDs": staff,
                    "anesthesia": anesthesia,
                    "bedNumber": bed,
                    "wardLocation": "Surgical Ward",
                    "durationDays": 0,
                    "checkInTimestamp":{
                        "date":checkin.strftime("%Y-%m-%d"),
                        "time":checkin.strftime("%H:%M")
                    },
                    "checkOutTimestamp":{
                        "date":checkout.strftime("%Y-%m-%d"),
                        "time":checkout.strftime("%H:%M")
                    },
                    "recoveryNotes": random.choice(recovery_notes),
                    "status":"completed"
                })

                hour = int(time_str.split(":")[0])

                if 7 <= hour < 15:
                    start,end = "07:00","15:00"
                elif 15 <= hour < 23:
                    start,end = "15:00","23:00"
                else:
                    start,end = "23:00","07:00"

                for sid in staff:
                    add_shift(
                        sid,
                        date.strftime("%Y-%m-%d"),
                        start,
                        end,
                        surgeryID,
                        time_str,
                        "completed"
                    )

# Week 2 Scheduled Surgeries
week2_start = start_date + timedelta(days=7)

for day in range(7):

    date = week2_start + timedelta(days=day)

    for room in range(1,6):

        surgery_name = room_surgery_schedule[room][day]
        surgery_type = surgery_types[surgery_name]

        for team_index in range(3):

            staff = teams[room][team_index]

            for s in range(3):

                time_str = schedule_times[team_index*3+s]

                patientID = get_patient_id()
                surgeryID = f"S{surgery_counter:04}"
                surgery_counter += 1

                surgeries.append({
                    "surgeryID": surgeryID,
                    "patientID": patientID,
                    "surgeryRoom": str(room),
                    "surgeryName": surgery_name,
                    "surgeryType": surgery_type,
                    "date": date.strftime("%Y-%m-%d"),
                    "timeScheduled": time_str,
                    "staffIDs": staff,
                    "status": "scheduled"
                })

                hour = int(time_str.split(":")[0])

                if 7 <= hour < 15:
                    start,end = "07:00","15:00"
                elif 15 <= hour < 23:
                    start,end = "15:00","23:00"
                else:
                    start,end = "23:00","07:00"

                for sid in staff:
                    add_shift(
                        sid,
                        date.strftime("%Y-%m-%d"),
                        start,
                        end,
                        surgeryID,
                        time_str,
                        "scheduled"
                    )

# -------------------
# Generate Prescriptions
# -------------------
prescriptions = []
prescription_counter = 1

for surgery in surgeries:

    if surgery["status"] != "completed":
        continue

    prescriptionID = f"PR{prescription_counter:04}"
    prescription_counter += 1

    patientID = surgery["patientID"]
    surgeryID = surgery["surgeryID"]
    surgery_type = surgery["surgeryType"]

    medicationName = random.choice(
        medication_options.get(surgery_type, ["Paracetamol"])
    )

    dosage_value = random.randint(100,1000)
    dosage = f"{dosage_value}mg"

    freq_template = random.choice(frequency_options)

    if "{} times daily" in freq_template:
        freq = freq_template.format(random.randint(1,4))
    elif "every {} hours" in freq_template:
        freq = freq_template.format(random.choice([6,8,12]))
    else:
        freq = freq_template.format(random.randint(1,3), random.randint(3,10))

    duration = f"{random.randint(3,14)} days"

    prescribedBy = random.choice(prescribers)

    prescriptions.append({
        "prescriptionID": prescriptionID,
        "patientID": patientID,
        "surgeryID": surgeryID,
        "medicationName": medicationName,
        "dosage": dosage,
        "frequency": freq,
        "duration": duration,
        "prescribedBy": prescribedBy
    })

# -------------------
# Generate Shifts
# -------------------
shifts = []

for staffID, entries in staff_shift_map.items():

    for shift in entries:

        shift_entry = shift.copy()

        if shift_entry["status"] == "completed":

            shift_entry.update({
                "clockIn":{
                    "date":shift_entry["date"],
                    "time":shift_entry["startTime"]
                },
                "lunchClockIn":{
                    "date":shift_entry["date"],
                    "time":"11:55"
                },
                "lunchClockOut":{
                    "date":shift_entry["date"],
                    "time":"12:25"
                },
                "clockOut":{
                    "date":shift_entry["date"],
                    "time":shift_entry["endTime"]
                }
            })

        shifts.append(shift_entry)

# -------------------
# Write files
# -------------------
with open(SURGERY_FILE,"w") as f:
    json.dump(surgeries,f,indent=2)

with open(PRESCRIPTION_FILE,"w") as f:
    json.dump(prescriptions,f,indent=2)

with open(STAFF_FILE,"w") as f:
    json.dump(staff_list,f,indent=2)

with open(SHIFTS_FILE,"w") as f:
    json.dump(shifts,f,indent=2)

print("Generated JSON files:")
print(f"- Surgeries: {len(surgeries)}")
print(f"- Prescriptions: {len(prescriptions)}")
print(f"- Staff: {len(staff_list)}")
print(f"- Shifts: {len(shifts)}")