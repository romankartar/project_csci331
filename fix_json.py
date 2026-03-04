import json
import re
import os

src_folder = "nosql"
files = ["staff.json", "patients.json", "surgeries.json", "prescriptions.json", "shifts.json"]

for file_name in files:
    file_path = os.path.join(src_folder, file_name)
    with open(file_path, "r") as f:
        text = f.read()
    
    # Remove JS-style comments
    text = re.sub(r'//.*', '', text)
    
    # Quote keys (key: value → "key": value)
    text = re.sub(r'(\b\w+\b)\s*:', r'"\1":', text)
    
    # Remove trailing commas before } or ]
    text = re.sub(r',(\s*[}\]])', r'\1', text)

    try:
        data = json.loads(text)
    except json.JSONDecodeError as e:
        print(f"Failed on {file_name}: {e}")
        continue

    with open(file_path, "w") as f:
        json.dump(data, f, indent=2)
    
    print(f"Fixed {file_name}")