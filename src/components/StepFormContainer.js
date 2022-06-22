import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import components
import StepOne from "./StepForms/StepOne";
import StepTwo from "./StepForms/StepTwo";
import StepThree from "./StepForms/StepThree";
import StepFour from "./StepForms/StepFour";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import css
import "../css/StepForm.css";

const steps = ["", "", "", ""];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [form1, setform] = useState();
  const [form2, setform2] = useState();
  const [form3, setform3] = useState();
  const [form4, setform4] = useState();

  const passData = (data) => {
    setform(data);
  };

  const passData2 = (data) => {
    setform2(data, "step2");
  };

  const passData3 = (data) => {
    setform3(data, "step2");
  };
  const passData4 = (data) => {
    setform4(data, "step2");
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (
      form1?.step1?.Vous.length > 0 &&
      form1?.step1?.Fréquence.length > 0 &&
      form1?.step1?.Type.length > 0 &&
      form1?.step1?.Pour.length > 0
    ) {
      setActiveStep(1);
    }

    if (
      form2?.step2?.Besoin.length > 0 &&
      form2?.step2?.Nombre.length > 0 &&
      form2?.step2?.Nombred.length >= 0 &&
      form2?.step2?.Bébé.length >= 0
    ) {
      setActiveStep(2);
    }

    if (
      form3.step3.Aller.length > 0 &&
      form3.step3.Retourle.length >= 0 &&
      form3.step3.Adresse.length > 0
    ) {
      setActiveStep(3);
    }

    if (form4.Firstname && form4.Email && form4.Telephone && form4.agree) {
      setActiveStep(4);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log(activeStep, "-activeStep");
  console.log(form1, "-form1");
  console.log(form2, "-forM2");
  console.log(form3, "-forM3");
  console.log(form4, "-forM4");
  return (
    <Container maxWidth="lg">
      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <Container maxWidth="sm">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption"></Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {/* </Box> */}
        </Container>

        {activeStep === steps.length ? null : (
          <React.Fragment>
            {activeStep + 1 === 1 ? (
              <>
                <StepOne passData={passData} />
              </>
            ) : null}
            {activeStep + 1 === 2 ? (
              <>
                <StepTwo passData2={passData2} />
              </>
            ) : null}
            {activeStep + 1 === 3 ? (
              <>
                <StepThree passData3={passData3} />
              </>
            ) : null}
            {activeStep + 1 === 4 ? (
              <>
                <StepFour passData4={passData4} />
              </>
            ) : null}

            <Box
              sx={{ display: "flex", flexDirection: "row", pt: 2 }}
              className="boxStepers_btn"
            >
              <button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                className="btn_caneel"
              >
                {activeStep === 0 ? "Cancel" : "Previous"}
              </button>
              <Box sx={{ flex: "1 1 auto" }} />

              <button onClick={handleNext} className="btn-next">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </Box>
          </React.Fragment>
        )}
      </Box>
      <ToastContainer />
    </Container>
  );
}
