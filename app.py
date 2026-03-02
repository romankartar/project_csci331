from sqlalchemy import create_engine, Column, String
from sqlalchemy.orm import declarative_base, sessionmaker

# Create database
engine = create_engine("sqlite:///hospital.db")

Base = declarative_base()

# Create table
class Staff(Base):
    __tablename__ = "staff"

    staffID = Column(String, primary_key=True)
    name = Column(String)
    role = Column(String)

# Create tables
Base.metadata.create_all(engine)

# Start session
Session = sessionmaker(bind=engine)
session = Session()

# Example insert
staff1 = Staff(staffID="ST0001", name="Rashida Jones", role="Family Doctor")

session.add(staff1)
session.commit()

print("Database created and one staff added.")