import React, { useState, useEffect } from "react";
import api from "../api/index";
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
  const [apiData, setApiData] = useState({
    you_are: "",

    first_name: "", // First name
    company_name: "", //company_name/company name optional
    email: "", //E-mail
    phone: "", // phone
    message: "", //company_name/company name optional optional
    agree: "",

    journey_type: [],
    days: [],
    journey_frequency: "",

    total_children: "",

    total_children: "",
    door_support: "",
    total_children: "",
    total_adults: "",
    baby: "",

    pickUp_date: "",
    pickUp_time: "",
    return_date: "",
    return_time: "",
    pickUp_address: "",
    destination_address: "",
    return_address: "",
  });

  const passData = (data) => {
    setform(data);

    setApiData((prev) => {
      prev.you_are = data?.step1?.your_are;
      prev.journey_type = data?.step1?.journey_type;
      prev.journey_frequency = data?.step1?.journey_frequency;
      prev.days = data?.step1?.days;

      return { ...prev };
    });
  };

  const passData2 = (data) => {
    setform2(data);

    setApiData((prev) => {
      prev.door_support = data?.step2?.door_support;
      prev.total_children = data?.step2?.total_children;
      prev.total_adults = data?.step2?.total_adults;
      prev.baby = data?.step2?.baby;

      return { ...prev };
    });
  };

  const passData3 = (data) => {
    setform3(data);
    setApiData((prev) => {
      prev.pickUp_date = data?.step3?.pickUp_date;
      prev.pickUp_time = data?.step3?.pickUp_time;
      prev.return_date = data?.step3?.return_date;
      prev.return_time = data?.step3?.return_time;
      prev.pickUp_address = data?.step3?.pickUp_address;
      prev.destination_address = data?.step3?.destination_address;
      prev.return_address = data?.step3?.return_address;

      return { ...prev };
    });
  };

  const passData4 = (data) => {
    setform4(data, "step2");
  };

  useEffect(() => {
    setApiData({
      ...apiData,
      first_name: form4?.first_name,
      email: form4?.email,
      company_name: form4?.company_name,
      phone: form4?.phone,
      message: form4?.message,
    });
  }, [form4]);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (
        form1?.step1?.your_are &&
        form1?.step1?.journey_frequency &&
        form1?.step1?.journey_type.length > 0 &&
        form1?.step1?.days.length > 0
      ) {
        setActiveStep(1);
      } else {
        toast.error("fill all mandatory fields");
      }
    }

    if (activeStep === 1) {
      if (form2?.step2?.door_support && form2?.step2?.total_children) {
        setActiveStep(2);
      } else {
        toast.error("fill all mandatory fields");
      }
    }

    if (activeStep === 2) {
      if (
        form3?.step3?.pickUp_date &&
        form3?.step3?.pickUp_time &&
        form3?.step3?.pickUp_address.city
      ) {
        setActiveStep(3);
      } else {
        toast.error("fill all mandatory fields");
      }
    }

    if (activeStep === 3) {
      if (form4?.first_name && form4?.email && form4?.phone && form4?.agree) {
        setActiveStep(4);

        api("post", "/request/", apiData).then((res) => {
          toast.success("Successfully ");
        });

        setApiData({ you_are: form1?.Vous });
      }
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
      {/* <ToastContainer /> */}
    </Container>
  );
}
