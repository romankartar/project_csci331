import json
from datetime import datetime

# Input and output paths
input_file = "nosql/patients.json"
output_file = "nosql_fixed/patients_fixed.json"

# Load original JSON
with open(input_file, "r") as f:
    patients = json.load(f)

# Convert dateOfBirth string to ISO format (still JSON-compatible)
for patient in patients:
    if "dateOfBirth" in patient:
        # Convert to datetime object first (optional)
        dob_obj = datetime.strptime(patient["dateOfBirth"], "%Y-%m-%d").date()
        # Replace the key with your SQLAlchemy column name if needed
        patient["dob"] = dob_obj.isoformat()
        del patient["dateOfBirth"]

# Write fixed JSON
with open(output_file, "w") as f:
    json.dump(patients, f, indent=2)

print(f"Dates fixed and saved to {output_file}")