//import React, { useState, useRef } from 'react';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import kidcabService from '../../assets/Kidcab_service.png';
import Checkbox from '@mui/material/Checkbox';
// import ReCAPTCHA from 'react-google-recaptcha';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Store, UpdateStore } from '../../StoreContext';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const StepFour = (props) => {
  // const recaptchaRef = useRef(null);
  const updateStore = UpdateStore();
  const store = Store();
  const [checked, setChecked] = useState(false);
  // const handleSubmit = async () => {
  //   const captchaToken = await recaptchaRef.current.executeAsync();
  //   recaptchaRef.current.reset();
  //   console.log('captchaToken', captchaToken);
  // };

  const [item, setItem] = useState({
    firstName: '', // First name
    last_name: '', //last_name/company name optional
    email: '', //E-mail
    phone: '', // phone
    company_name: '', //last_name/company name optional optional
    agree: '',
    captchaToken: '',
  });
  const onChangeform = (e) => {
    if (e.target.name === 'firstName') {
      updateStore({
        first_name: e.target.value,
      });
      setItem({ ...item, [e.target.name]: e.target.value });
    }
    if (e.target.name === 'last_name') {
      updateStore({
        last_name: e.target.value,
      });
      setItem({ ...item, [e.target.name]: e.target.value });
    }
    if (e.target.name === 'phone') {
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        updateStore({
          phone: e.target.value,
        });
        setItem({ ...item, [e.target.name]: e.target.value });
      }
    }
    if (e.target.name === 'company_name') {
      updateStore({
        company_name: e.target.value,
      });
      setItem({ ...item, [e.target.name]: e.target.value });
    }
    if (e.target.name === 'email') {
      updateStore({
        email: e.target.value,
      });
      setItem({ ...item, [e.target.name]: e.target.value });
    }
  };

  const onChangeformcheck = async () => {
    setChecked(!checked);
    setItem({ ...item, agree: !checked });
  };
  useEffect(() => {
    props.passData4(item);
  }, [item]);

  return (
    <div className="stepOne_main">
      {/* one  */}

      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }} className=" ">
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop cm-view-btn-group cm-view-btn-group2  ">
            <h5 className="section_headers_2 hange-Fonts-Size text-align-text">Prénom</h5>

            <TextField
              className="custom_input_children_inner3 custom_input_children_inner2_email"
              placeholder="Prénom"
              onChange={onChangeform}
              name="firstName"
              value={store.first_name}
              // className="cm-input-name"
            />
            {/* <button className="btnStepers btnstpers_3">Write here </button> */}
          </div>
          <div className="btn-flex-grop cm-view-btn-group cm-view-btn-group2 cm-view-btn-group22">
            <h5 className="section_headers_2 hange-Fonts-Size text-align-text">Nom</h5>
            <TextField
              className="custom_input_children_inner3 custom_input_children_inner2_tele"
              placeholder="Nom"
              name="last_name"
              value={store.last_name}
              onChange={onChangeform}
            />
          </div>
        </div>
      </Box>

      {/* second  */}

      <Box
        lg={{ width: '100%' }}
        md={{ width: '100%' }}
        sm={{ width: '100%' }}
        className=" box-top3"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop  cm-view-btn-group cm-view-btn-group2 cm-view-btn-group22">
            <h5 className="section_headers_2 hange-Fonts-Size text-align-text">email</h5>

            <TextField
              className="custom_input_children_inner3 custom_input_children_inner2_email"
              type="email"
              placeholder="email"
              onChange={onChangeform}
              name="email"
              value={store.email}
            />
          </div>
          <div className="btn-flex-grop cm-view-btn-group cm-view-btn-group2 cm-view-btn-group22">
            <h5 className="section_headers_2 hange-Fonts-Size text-align-text">Téléphone </h5>
            <TextField
              className="custom_input_children_inner3 custom_input_children_inner2_tele"
              type="text"
              placeholder="Téléphone"
              name="phone"
              value={store.phone}
              onChange={onChangeform}
            />
          </div>
        </div>
      </Box>

      {/* third  */}

      <Box
        lg={{ width: '100%' }}
        md={{ width: '100%' }}
        sm={{ width: '100%' }}
        className=" box-top3"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size ">
              Nom de l'organisme/entreprise <span className="optonal_span">facultatif</span>
            </h5>
            <TextField
              placeholder="Nom de l’organisme"
              className="custom_input_children_inner2_message"
              name="company_name"
              onChange={onChangeform}
              style={{ marginLeft: '40px' }}
              value={store.company_name}
            />
          </div>
        </div>
      </Box>

      <Box
        lg={{ width: '100%' }}
        md={{ width: '100%' }}
        sm={{ width: '100%' }}
        className=" box-top3"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop4 cm-view-btn-group cm-view-btn-group4">
            {/* < className="section_headers_2 hange-Fonts-Size text-align-text"> */}{' '}
            <Checkbox {...label} onChange={(e) => onChangeformcheck(e)} name="agree" />{' '}
            {/* </h5> */}
            <p className="form4_agree-text">
              En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées
              dans le cadre <br /> de la demande d'une estimation et de la relation commerciale qui
              peut en découler. J'accepte la politique de confidentialité.
            </p>
          </div>
        </div>
      </Box>

      <div className="sep4PictureBox4">
        <img src={kidcabService} alt="kidCab" />
      </div>
    </div>
  );
};

export default StepFour;
