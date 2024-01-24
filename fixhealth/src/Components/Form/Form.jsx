import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { TextField, Button, Stepper, Step, StepLabel } from "@mui/material";
import DoctorList from "../DoctorList/DoctorList";

const Form = () => {
  const API_ENDPOINT =
    "https://65b0af1bd16d31d11bdcf951.mockapi.io/api/v1/Doctor";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    PreviousExperiences: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [avaiableDoctors, setAvailableDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showDoctorList, setShowDoctorList] = useState(false);
  useEffect(() => {
    // Fetch available doctors from the API
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      console.log(data.json);
      setAvailableDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleNext = () => {
    if (activeStep === 0 && formData.name && formData.phoneNumber) {
      setActiveStep((prevStep) => prevStep + 1);
    }
    if (activeStep === 1 && formData.age) {
      setActiveStep((prevStep) => prevStep + 1);
    }
    if (activeStep === 2 || activeStep === 3) {
      setActiveStep((prevStep) => prevStep + 1);
    }
    // Additional logic for specific steps (e.g., filtering doctors based on city)
    if (activeStep === 4) {
      if (formData.city) {
        setShowDoctorList(true);
        filterDoctors();
        resetForm();
        setActiveStep(0);
      } else {
        alert("please Enter City to browse the list of doctors");
        resetForm();
        setActiveStep(0);
      }
    }
    if (activeStep === 4 && !formData.city) {
    }
  };
  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      age: "",
      city: "",
      company: "",
      chiefComplaints: "",
      PreviousExperiences: "",
    });
  };
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const filterDoctors = () => {
    const cityOverride = new URLSearchParams(window.location.search).get(
      "city"
    );
    const selectedCity = cityOverride || formData.city;

    // Filter doctors based on the selected city
    const filtered = avaiableDoctors.filter(
      (doctor) => doctor.city === selectedCity
    );
    setFilteredDoctors(filtered);
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              sx={{ backgroundColor: "rgb(97, 167, 167)" }}
              required
              fullWidth
              label="Name"
              variant="filled"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <TextField
              sx={{ backgroundColor: "rgb(97, 167, 167)" }}
              fullWidth
              required
              variant="filled"
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              sx={{ backgroundColor: "rgb(97, 167, 167)" }}
              fullWidth
              label="Age"
              variant="filled"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
            />
            <TextField
              sx={{ backgroundColor: "rgb(97, 167, 167)" }}
              fullWidth
              label="City"
              variant="filled"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
            <TextField
              sx={{ backgroundColor: "rgb(97, 167, 167)" }}
              fullWidth
              label="Company"
              variant="filled"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </>
        );
      case 2:
        return (
          <TextField
            sx={{ backgroundColor: "rgb(97, 167, 167)" }}
            fullWidth
            label="Chief Complaints"
            variant="filled"
            multiline
            rows={4}
            value={formData.chiefComplaints}
            onChange={(e) =>
              handleInputChange("chiefComplaints", e.target.value)
            }
          />
        );
      case 3:
        if (formData.age < 40) {
          // Skip previous experience step for age less than 40
          handleNext();
          return null;
        }
        return (
          <>
            <div>
              Have you had any previous experience with physiotherapy?
              <Button
                onClick={() => handleInputChange("PreviousExperiences", true)}
              >
                Yes
              </Button>
              <Button
                className={styles.button}
                onClick={() => handleInputChange("PreviousExperiences", false)}
              >
                No
              </Button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.heading}>
        <h1>Book an Appointment</h1>
      </div>
      <div className={styles.formContent}>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>

        <div>
          {renderStepContent(activeStep)}
          <div>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === 4 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
      {showDoctorList && <DoctorList doctors={filteredDoctors} />}
    </div>
  );
};

export default Form;
