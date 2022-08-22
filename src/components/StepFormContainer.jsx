import React, { useState, useEffect, useRef } from 'react';
import api from '../api/index';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';
// import components
import StepOne from './StepForms/StepOne';
import StepTwo from './StepForms/StepTwo';
import StepThree from './StepForms/StepThree';
import StepFour from './StepForms/StepFour';
import { toast } from 'react-toastify';
import Modal from './Modal';
import OfferModal from './OfferModal';
import 'react-toastify/dist/ReactToastify.css';
// import css
import '../css/StepForm.css';
import { Store, UpdateStore } from '../StoreContext';
import { useHistory } from 'react-router-dom';

const steps = ['', '', '', ''];

export default function HorizontalLinearStepper() {
  const history = useHistory();
  const recaptchaRef = useRef(null);
  const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());
  const updateStore = UpdateStore();
  const store = Store();
  const [form1, setform] = useState();
  const [form2, setform2] = useState();
  const [form3, setform3] = useState();
  const [form4, setform4] = useState();
  const [apiData, setApiData] = useState({
    you_are: '',
    first_name: '', // First name
    last_name: '', //last_name/company name optional
    email: '', //E-mail
    phone: '', // phone
    company_name: '', //last_name/company name optional optional
    agree: '',
    captchaToken: '',
    journey_type: [],
    days: [],
    journey_frequency: '',
    door_support: '',
    total_children: 0,
    total_adults: 0,
    baby: 0,
    pickUp_date: '',
    pickUp_time: '',
    return_date: '',
    return_time: '',
    pickUp_address: '',
    destination_address: '',
    return_address: '',
  });
  const [captchaFlag, setCaptchaFlag] = useState(false);
  const [offerModal, setOfferModal] = useState(false);
  const [rideRequest, setRideRequest] = useState({});

  const handleCaptcha = async () => {
    setCaptchaFlag(true);
  };

  const passData = (data) => {
    setform(data);

    setApiData((prev) => {
      const obj = {
        you_are: store.your_areE,
        journey_type: store.journey_typeE,
        journey_frequency: store.journey_frequencyE,
        days: store.daysE,
        ...prev,
      };
      return { ...obj };
    });
  };

  const passData2 = (data) => {
    setform2(data);
  };

  const passData3 = (data) => {
    setform3(data);
  };

  const passData4 = (data) => {
    setform4(data);
  };

  useEffect(() => {
    if (form4) {
      setApiData((prev) => {
        return {
          ...prev,
          first_name: store?.first_name,
          email: store?.email,
          last_name: store?.last_name,
          phone: store?.phone,
          company_name: store?.company_name,
          captchaToken: store?.captchaToken,
          door_support: store?.door_support,
        };
      });
    }
  }, [form4]);

  useEffect(() => {
    if (form3 || store.pickUp_address || store?.destination_address || store?.return_address) {
      setApiData((prev) => {
        return {
          ...prev,
          pickUp_date: store?.pickUp_date,
          pickUp_time: store?.pickUp_time,
          return_date: store?.return_date,
          return_time: store?.return_time,
          pickUp_address: store?.pickUp_address,
          destination_address: store?.destination_address,
          return_address: store?.return_address,
        };
      });
    }
  }, [form3, store.pickUp_address, store?.destination_address, store?.return_address]);

  useEffect(() => {
    if (form2) {
      setApiData((prev) => {
        return {
          ...prev,
          door_support: store?.door_support,
          total_children: store?.total_children
            ? store?.total_children
            : Number(store.total_children_tb),
          total_adults: store?.total_adults ? store.total_adults : Number(store.total_adults_tb),
          baby: store?.baby ? store.baby : Number(store?.babyTb),
        };
      });
    }
  }, [form2]);

  useEffect(() => {
    if (form1) {
      setApiData((prev) => {
        return {
          ...prev,
          you_are: store?.your_areE,
          journey_type: store?.journey_typeE,
          journey_frequency: store?.journey_frequencyE,
          days: store?.daysE,
        };
      });
    }
  }, [form1]);
  console.log(store?.pickUp_address, 'store?.pickUp_address');
  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  const handleNext = () => {
    if (activeStep === 0) {
      if (
        store.your_are &&
        store?.journey_frequency &&
        store.journey_type.length > 0 &&
        store?.days.length > 0
      ) {
        setActiveStep(1);
      } else {
        return toast.error('remplir tous les champs obligatoires');
      }
    }
    if (activeStep === 1) {
      if (store?.door_support) {
        if (store?.total_children || store?.total_children_tb !== '') {
          setActiveStep(2);
        } else {
          return toast.error('remplir tous les champs obligatoires');
        }
      } else {
        return toast.error('remplir tous les champs obligatoires');
      }
    }

    if (activeStep === 2) {
      console.log(store, 'storeee');
      if (store?.pickUp_date && store?.pickUp_time && store?.pickUp_address) {
        setActiveStep(3);
      } else {
        return toast.error('remplir tous les champs obligatoires');
      }
    }

    if (activeStep === 3) {
      if (store?.first_name && store?.email && store?.phone && store?.last_name) {
        if (!form4.agree) {
          return toast.error("Veuillez marquer l'accord");
        }
        api('post', '/requests/', apiData).then((res) => {
          if (!res.data.contact) {
            setRideRequest(res.data.request);
            setOfferModal(!offerModal);
          } else {
            history.push('/success');
          }

          updateStore({
            your_are: '',
            your_areE: '',
            journey_type: [],
            journey_typeE: [],
            journey_frequency: '',
            journey_frequencyE: '',
            days: [],
            daysE: [],
            door_support: '',
            door_supportS: '',
            total_children: '',
            total_children_tb: '',
            total_adults: '',
            total_adults_tb: '',
            baby: '',
            babyTb: '',
            pickUp_date: '',
            pickUp_time: '',
            return_date: '',
            return_time: '',
            pickUp_address: {
              label: '',
              label2: '',
              postal_code: '',
              lat: '',
              lng: '',
              city: '',
            },
            destination_address: {
              label: '',
              label2: '',
              postal_code: '',
              lat: '',
              lng: '',
              city: '',
            },
            return_address: {
              label: '',
              label2: '',
              postal_code: '',
              lat: '',
              lng: '',
              city: '',
            },
            first_name: '', // First name
            last_name: '', //last_name/company name optional
            email: '', //E-mail
            phone: '', // phone
            company_name: '', //last_name/company name optional optional
            captchaToken: '',
          });
          toast.success('Demande de trajet envoyée avec succès ');
        });
      } else {
        toast.error('remplir tous les champs obligatoires');
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const updateStatus = (id, status) => {
    api('put', `/requests/${id}`, { status }).then((res) => {
      history.push('/success');
    });
  };

  return (
    <Container maxWidth="lg">
      <Modal
        open={offerModal}
        component={<OfferModal rideRequest={rideRequest} updateStatus={updateStatus} />}
      />
      <Box
        lg={{ width: '100%' }}
        md={{ width: '100%' }}
        sm={{ width: '100%' }}
        className="boxStepers"
      >
        <Container maxWidth="sm">
          <Stepper className="boxStepers_main" activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step className="step_main" key={label} {...stepProps}>
                  <StepLabel className="step-label_custom" {...labelProps}>
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {/* </Box> */}
        </Container>

        {activeStep === steps.length ? (
          <></>
        ) : (
          <>
            {activeStep + 1 === 1 ? <StepOne passData={passData} /> : null}
            {activeStep + 1 === 2 ? <StepTwo passData2={passData2} /> : null}
            {activeStep + 1 === 3 ? <StepThree passData3={passData3} /> : null}
            {activeStep + 1 === 4 ? (
              <StepFour
                passData4={passData4}
                handleCaptcha={handleCaptcha}
                recaptchaRef={recaptchaRef}
              />
            ) : null}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="boxStepers_btn">
              {activeStep > 0 && (
                <button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  className="btn_caneel"
                  type="button"
                >
                  Précédent
                </button>
              )}
              <Box sx={{ flex: '0 1 auto' }} />

              <button
                onClick={handleNext}
                className="btn-next"
                type="button"
                disabled={activeStep === steps.length - 1 && !captchaFlag}
              >
                {activeStep === steps.length - 1 ? 'Envoyer ma demande' : 'Suivante'}
              </button>
            </Box>
          </>
        )}
      </Box>
      {/* <ToastContainer /> */}
    </Container>
  );
}
