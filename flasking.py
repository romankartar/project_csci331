from flask import Flask, render_template, request, redirect, session
from models import Staff, db_session

app = Flask(__name__)
app.secret_key = "supersecretkey"  # Required for session

# LOGIN PAGE
@app.route("/", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        staff_id = request.form.get("staffID")
        password = request.form.get("password")

        staff = db_session.query(Staff).filter_by(staffID=staff_id).first()

        if staff and staff.password == password:
            session["staffID"] = staff.staffID
            return redirect("/home")  # Hard-coded URL
        else:
            error = "Invalid Staff ID or Password"

    return render_template("index.html", error=error)

# HOME PAGE
@app.route("/home")
def home():
    if "staffID" not in session:
        return redirect("/")  # redirect to login if not logged in
    return render_template("home.html")

# OTHER PAGES
@app.route("/patients")
def patients():
    if "staffID" not in session:
        return redirect("/")
    return render_template("patients.html")

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

# LOGOUT
@app.route("/logout")
def logout():
    session.pop("staffID", None)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
