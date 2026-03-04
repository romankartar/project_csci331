from flask import Flask, render_template, request
from models import Patient, session
from datetime import datetime

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def search_patient():
    patient = None
    
    if request.method == "POST":
        dob_input = request.form.get("dob")
        
        if dob_input:
            dob = datetime.strptime(dob_input, "%Y-%m-%d").date()
            patient = session.query(Patient).filter_by(dob=dob).first()
    
    return render_template("index.html", patient=patient)


if __name__ == "__main__":
    app.run(debug=True)