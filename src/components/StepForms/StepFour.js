import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Kidcab_service from "../../assets/Kidcab_service.png";
import Checkbox from "@mui/material/Checkbox";
import ReCAPTCHA from "react-google-recaptcha";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const StepFour = (props) => {
  const [age, setAge] = React.useState(10);
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

 

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  console.log(checked, "-checked");

  const [item, setItem] = useState({
    Firstname: "", // First name
    Organization: "", //Organization/company name optional
    Email: "", //E-mail
    Telephone: "", // Telephone
    typemessage: "", //Organization/company name optional optional
    agree: "",
  });

  const { Firstname, Organization, Email, Telephone, typemessage, agree } =
    item;

  const onChangeform = (e) =>
    setItem({ ...item, [e.target.name]: e.target.value });
  props.passData4(item);
  console.log(item, "-item");

  const onChangeformcheck = (e) => {
    setChecked(!checked);
    setItem((prev) => {
      prev.agree = !checked;
      return { ...prev };
    });
  };

  return (
    <div className="stepOne_main">
      {/* one  */}
      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop">
            <h5
              style={{ marginTop: "20px" }}
              className="section_headers_2 hange-Fonts-Size"
            >
              Prénom?
            </h5>

            <TextField
              style={{ marginTop: "20px" }}
              placeholder="Prénom"
              onChange={onChangeform}
              name="Firstname"
              value={Firstname}
            />
            {/* <button className="btnStepers btnstpers_3">Write here </button> */}
          </div>
          <div className="btn-flex-grop">
            <h5
              style={{ marginTop: "20px" }}
              className="section_headers_2 hange-Fonts-Size"
            >
              Nom de l'organisme/entreprise{" "}
              <span className="optonal_span">optional</span>{" "}
            </h5>
            <TextField
              style={{ marginTop: "20px" }}
              placeholder="  Nom de l'organisme/entreprise"
              name="Organization"
              value={Organization}
              onChange={onChangeform}
            />
          </div>
        </div>
      </Box>

      {/* second  */}

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop">
            <h5
              style={{ marginTop: "20px" }}
              className="section_headers_2 hange-Fonts-Size"
            >
              Email
            </h5>

            <TextField
              style={{ marginTop: "20px" }}
              type="email"
              placeholder="Email"
              onChange={onChangeform}
              name="Email"
              value={Email}
            />
          </div>
          <div className="btn-flex-grop">
            <h5
              style={{ marginTop: "20px" }}
              className="section_headers_2 hange-Fonts-Size"
            >
              Téléphone{" "}
            </h5>
            <TextField
              style={{ marginTop: "20px" }}
              type="number"
              placeholder="Téléphone"
              name="Telephone"
              value={Telephone}
              onChange={onChangeform}
            />
          </div>
        </div>
      </Box>

      {/* third  */}

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop">
            <h5
              style={{ marginTop: "20px" }}
              className="section_headers_2 hange-Fonts-Size"
            >
              Nom de l'organisme/entreprise optional{" "}
              <span className="optonal_span">optional</span>
            </h5>
            <TextareaAutosize
              // aria-label="Tapez votre massage "
              placeholder="Tapez votre massage"
              className="btnStepers btnstpers_3 typemessages"
              name="typemessage"
              onChange={onChangeform}
              style={{ marginTop: "20px", marginLeft: "40px" }}
              value={typemessage}
              minRows={3}
            />
          </div>
        </div>
      </Box>

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop4">
            <h5 className="section_headers_2 hange-Fonts-Size">
              {" "}
              <Checkbox
                {...label}
                onChange={(e) => onChangeformcheck(e)}
                name="agree"
              />{" "}
            </h5>
            <p className="form4_agree-text">
              En soumettant ce formulaire, j'accepte que les informations
              saisies soient exploitées dans le cadre <br /> de la demande d'une
              estimation et de la relation commerciale qui peut en découler.
              J'accepte la politique de confidentialité.
            </p>
          </div>
        </div>
      </Box>

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop4">
            <ReCAPTCHA sitekey="Kidcab" onChange={onChange} />
          </div>
        </div>
      </Box>

      <div className="sep4PictureBox4">
        <img src={Kidcab_service} />
      </div>
    </div>
  );
};

export default StepFour;

