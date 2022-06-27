import React, { useState, useEffect } from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VTCTaxiLoi from "../../assets/VTC-Taxi-Loi.png";
import TimePicker from "react-time-picker";
import AddressInput from "../AdressInput";
import TextField from "@mui/material/TextField";
const StepThree = (props) => {
  const [age, setAge] = React.useState(10);
  const [value, onChange] = useState("12:00");
  const [value2, onChange2] = useState("12:00");
  let [startAddress, setStartAddress] = useState({});
  let [endAddress, setEndAddress] = useState({});
  let [returnAddress, setReturnAddress] = useState({});

  console.log(startAddress, "startAddress");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(value);
  const [item, setItem] = useState({
    step3: {
      pickUp_date: "",
      pickUp_time: "",
      return_date: "",
      return_time: "",
      pickUp_address: "",
      destination_address: "",
      return_address: "",
    },
  });

  useEffect(() => {
    setItem((prev) => {
      prev.step3.pickUp_address = startAddress;
      return { ...prev };
    });
  }, [startAddress]);

  useEffect(() => {
    setItem((prev) => {
      prev.step3.pickUp_time = value;
      return { ...prev };
    });
  }, [value]);

  useEffect(() => {
    setItem((prev) => {
      prev.step3.return_time = value2;
      return { ...prev };
    });
  }, [value2]);

  useEffect(() => {
    setItem((prev) => {
      prev.step3.destination_address = endAddress;
      return { ...prev };
    });
  }, [endAddress]);

  useEffect(() => {
    setItem((prev) => {
      prev.step3.return_address = returnAddress;
      return { ...prev };
    });
  }, [returnAddress]);

  console.log(item, "my address");

  // useEffect(() => {
  //   setItem((prev) => {
  //     prev.step3.pickUp_address = startAddress;
  //     prev.step3.destination_address = endAddress;
  //     prev.step3.return_address = returnAddress;
  //     return { ...prev };
  //   });
  // }, [startAddress, endAddress, returnAddress]);

  const disableDates = () => {
    var today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0";
    }
    return yyyy + "-" + mm + "-" + dd;
  };

  let init_pickUp_date;
  let init_pickUp_date2;
  const handelBtn = (e) => {
    if (e.target.name == "pickUp_date") {
      init_pickUp_date = e.target.value
      setItem((prev) => {
       
        prev.step3.pickUp_date = init_pickUp_date
        return { ...prev };
      });
    }
    if (e.target.name == "return_date") {
      init_pickUp_date2 = e.target.value

      setItem((prev) => {
        prev.step3.return_date = init_pickUp_date2
        return { ...prev };
      });
    }
    props.passData3(item);
  };

  const handelBtn5 = (e) => {
    setItem((prev) => {
      prev.step3.Retourle = e.target.value;
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
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Siz ">Aller le ?</h5>

            <TextField
              // className="form-control-alternative"
              id="input-date"
              locale={"en-gb"}
              placeholder={"Select Date"}
              type="date"
              min={disableDates()}
              value={item?.step3.pickUp_date?.split("T")[0]}
              name="pickUp_date"
              onChange={handelBtn}
              className="btnStepers btnsteper_special"
            />
          </div>
          <div className="btn-flex-grop btn-flex-grop cm-view-btn-group">
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
        className="boxStepers box-top3"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse de prise en charge
            </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth className="form_cm" > 
                {/* <InputLabel id="demo-simple-select-label" ></InputLabel> */}
                <AddressInput  style={{ maxWidth: "100%" }}
                    id="boxStepers_input_sm"
            
                
                  label=" " 
                  address={startAddress}
               
                  setAddress={setStartAddress}
                />
              </FormControl>
            </Box>
          </div>
          <div className="btn-flex-grop btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse de destination{" "}
              <span className="optonal_span">optional</span>
            </h5>
            <Box sx={{ minWidth: 120 }} className="box-leftmove">

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <AddressInput
                  label=""
                  address={endAddress}
                  setAddress={setEndAddress}
                />
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
        className="boxStepers box-top3"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Retour le <span className="optonal_span">optional</span>
            </h5>
            <TextField
              // className="form-control-alternative"
              id="input-date"
              locale={"en-gb"}
              placeholder={"Select Date"}
              type="date"
              min={disableDates()}
              value={item?.step3.return_date?.split("T")[0]}
              name="return_date"
              onChange={handelBtn}
              className="btnStepers btnsteper_special"

            />
          </div>
          <div className="btn-flex-grop cm-view-btn-group">
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
                    value={value2}
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
        className="boxStepers box-top3"
      >
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse retour (si différente){" "}
              <span className="optonal_span">optional</span>
            </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth className="form_cm" > 
                {/* <InputLabel id="demo-simple-select-label" ></InputLabel> */}
                <AddressInput  style={{ maxWidth: "100%" }}
                    id="boxStepers_input_sm"
            
                
                  label=" " 
                  address={returnAddress}
               
                  setAddress={setReturnAddress}
                />
              </FormControl>
            </Box>
            {/* <FormControl fullWidth>
            <AddressInput
              label=" Adresse retour (si différente)"
              address={returnAddress}
              setAddress={setReturnAddress}
              
            />
                        </FormControl> */}
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
