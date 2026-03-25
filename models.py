from sqlalchemy import create_engine, Column, String, Integer, Date, Boolean, JSON
from sqlalchemy.orm import declarative_base, sessionmaker

engine = create_engine("sqlite:///hospital.db")
Session = sessionmaker(bind=engine)
db_session = Session()
Base = declarative_base()

class Staff(Base):
    __tablename__ = "staff"

    staffID = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=False)
    mode = Column(String, nullable=False)
    password = Column(String, nullable=False)

class Patient(Base):
    __tablename__ = "patients"

    patientID = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    gender = Column(String, nullable=False)
    dob = Column(Date, nullable=False)
    phone = Column(String, nullable=False)
    address = Column(String, nullable=False)
    primary_physician_id = Column(String, nullable=False)
    allergies = Column(String, nullable=True)
    conditions = Column(String, nullable=True)

class Surgery(Base):
    __tablename__ = "surgeries"

    surgeryID = Column(String, primary_key=True)
    patientID = Column(String, nullable=False)
    surgeryRoom = Column(String, nullable=False)

    staffIDs = Column(JSON, nullable=False)

    surgeryName = Column(String, nullable=False)
    surgeryType = Column(String, nullable=False)
    date = Column(String, nullable=False)
    timeScheduled = Column(String, nullable=False)

    anesthesia = Column(JSON, nullable=True)

    checkInDate = Column(String, nullable=True)
    checkInTime = Column(String, nullable=True)
    checkOutDate = Column(String, nullable=True)
    checkOutTime = Column(String, nullable=True)

    recoveryNotes = Column(String, nullable=True)
    status = Column(String, nullable=False)

class Prescription(Base):
    __tablename__ = "prescriptions"

    prescriptionID = Column(String, primary_key=True)
    patientID = Column(String, nullable=False)
    surgeryID = Column(String, nullable=False)
    medicationName = Column(String, nullable=False)
    dosage = Column(String, nullable=False)
    frequency = Column(String, nullable=False)
    duration = Column(String, nullable=False)
    prescribedBy = Column(String, nullable=False)

class Shift(Base):
    __tablename__ = "shifts"

    staffID = Column(String, primary_key=True)
    date = Column(String, primary_key=True)
    startTime = Column(String, primary_key=True)

    endTime = Column(String, nullable=False)
    status = Column(String, nullable=False)

    surgeries = Column(JSON, nullable=False)

    clockIn = Column(JSON, nullable=True)
    lunchClockIn = Column(JSON, nullable=True)
    lunchClockOut = Column(JSON, nullable=True)
    clockOut = Column(JSON, nullable=True)

engine = create_engine("sqlite:///hospital.db")

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()