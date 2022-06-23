import React,{useState} from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VTCTaxiLoi from "../../assets/VTC-Taxi-Loi.png";
import TimePicker from "react-time-picker";
const StepThree = (props) => {
  const [age, setAge] = React.useState(10);
  const [value, onChange] = useState("12:00");
  const [value2, onChange2] = useState("12:00");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
console.log(value)
  const [item, setItem] = useState({
    step3: {
      Aller: [],
      Heurederamassage: [value],
      Adresse: ["demo address"], // address
      Adressede : [], // address
      Retourle:[], 
      Heure:[value2],
      Adresseretour:[]
    },
  });

  const style1 = {
    color: "white",
    backgroundColor: "#4db9b4",
  };
  const style2 = {


    background: "#F8FCFB",
    border: "1px solid #DFEEEB",


  };

  const  Aller =   [ 
    "Une mairie"
  ]

  const  Retourle  = [
    "Une mairie"
  ]


  const handelBtn = (e) => {

    if (item.step3.Aller.includes(e.target.innerHTML)) {
      let index = item.step3.Aller.indexOf(e.target.innerHTML);

      setItem((prev) => {
        prev.step3.Aller.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step3.Aller.push(e.target.innerHTML);
        return { ...prev };
      });
      props.passData3(item);
     
  };


  const handelBtn5 = (e) => {

    if (item.step3.Retourle.includes(e.target.innerHTML)) {
      let index = item.step3.Retourle.indexOf(e.target.innerHTML);

      setItem((prev) => {
        prev.step3.Retourle.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step3.Retourle.push(e.target.innerHTML);
        return { ...prev };
      });
      props.passData3(item);
     
  };
  
  

  return (
    <div className="stepOne_main">
      <h5 className="section_headers">*Répondre aux questions suivantes!</h5>

      {/* one  */}
      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop">
            <h5 className="section_headers_2 hange-Fonts-Size">Aller le ?</h5>

            {/* <button className="btnStepers btnstpers_3">Une mairie</button> */}
            {Aller.map((obj,i) => {
            return (
              <button  className="btnStepers btnstpers_3"  onClick={(e) => handelBtn(e)}  
              style={
                item.step3.Aller.find((e) => {
                  if (e === obj) return true;
                })
                  ? style1
                  : style2
              }
              
            >{obj}</button>
            )
          })}
          </div>
          <div className="btn-flex-grop">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Heure de ramassage{" "}
            </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
              <div className="TimePicker-ss">

               <TimePicker
                 style={{ height: "calc(1.5em + 1.25rem + 2px)" }}
                 name="time"
                 disableClock={true}
                 clockIcon={null}
                 amPmAriaLabel={true}
                 value={value}
                 onChange={onChange}
               />
             </div>
              </FormControl>
            </Box>
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
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse de prise en charge
            </h5>

            <button className="btnStepers btnstpers_3">Une mairie</button>
          </div>
          <div className="btn-flex-grop">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse de destination{" "}
              <span className="optonal_span">optional</span>
            </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  className="select-class"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Write here</MenuItem>
                  <MenuItem value={20}>Write here</MenuItem>
                  <MenuItem value={30}>Write here</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
            <h5 className="section_headers_2 hange-Fonts-Size">
              Retour le <span className="optonal_span">optional</span>
            </h5>

            {/* <button className="btnStepers btnstpers_3">Une mairie</button> */}
            {Retourle.map((obj,i) => {
            return (
              <button   onClick={(e) => handelBtn5(e)}  
              style={
                item.step3.Retourle.find((e) => {
                  if (e === obj) return true;
                })
                  ? style1
                  : style2
              }
              
              className="btnStepers btnstpers_3">{obj}</button>
            )
          })}
          </div>
          <div className="btn-flex-grop">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Heure de ramassage <span className="optonal_span">optional</span>
            </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
              <div className="TimePicker-ss">

               <TimePicker
                 style={{ height: "calc(1.5em + 1.25rem + 2px)" }}
                 name="time"
                 disableClock={true}
                 clockIcon={null}
                 amPmAriaLabel={true}
                 value={value}
                 onChange={onChange2}
               />
             </div>
              </FormControl>
            </Box>
          </div>
        </div>
      </Box>

      {/* four */}
      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse retour (si différente){" "}
              <span className="optonal_span">optional</span>
            </h5>

            <button className="btnStepers btnstpers_3">Write heree</button>
          </div>
        </div>
      </Box>

      <div className="sep3PictureBox3">
        <img src={VTCTaxiLoi} />
      </div>
    </div>
  );
};

export default StepThree;
