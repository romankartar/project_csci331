from sqlalchemy import create_engine, Column, String, Integer, Date, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Staff(Base):
    __tablename__ = "staff"
    staffID = Column(String, primary_key=True)
    name = Column(String)
    role = Column(String)

class Patient(Base):
    __tablename__ = "patients"
    patientID = Column(String, primary_key=True)
    name = Column(String)
    age = Column(Integer)
    gender = Column(String)
    dob = Column(Date)
    phone = Column(String)
    address = Column(String)
    primary_physician_id = Column(String)
    allergies = Column(String)
    conditions = Column(String)

class Surgery(Base):
    __tablename__ = "surgeries"
    surgeryID = Column(String, primary_key=True)
    patientID = Column(String)
    surgeonID = Column(String, nullable=True)
    surgeryName = Column(String, nullable=True)
    surgeryType = Column(String, nullable=True)
    date = Column(String)
    timeScheduled = Column(String, nullable=True)
    anesthesia_used = Column(Boolean, nullable=True)
    anesthesia_type = Column(String, nullable=True)
    anesthesia_dosage = Column(String, nullable=True)
    checkInDate = Column(String, nullable=True)
    checkInTime = Column(String, nullable=True)
    checkOutDate = Column(String, nullable=True)
    checkOutTime = Column(String, nullable=True)
    recoveryNotes = Column(String, nullable=True)

class Prescription(Base):
    __tablename__ = "prescriptions"
    prescriptionID = Column(String, primary_key=True)
    patientID = Column(String)
    surgeryID = Column(String, nullable=True)
    medicationName = Column(String)
    dosage = Column(String)
    frequency = Column(String)
    duration = Column(String)
    prescribedBy = Column(String)


class Shift(Base):
    __tablename__ = "shifts"
    shiftID = Column(Integer, primary_key=True, autoincrement=True)
    staffID = Column(String)
    day = Column(String)
    start_time = Column(String)
    end_time = Column(String)

# SQLite connection
engine = create_engine("sqlite:///hospital.db")
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()