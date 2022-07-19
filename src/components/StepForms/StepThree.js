import React, { useState, useEffect } from 'react';
//
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VTCTaxiLoi from '../../assets/VTC-Taxi-Loi.png';
import TimePicker from 'react-time-picker';
import AddressInput from '../AdressInput';
import TextField from '@mui/material/TextField';
import { Store, UpdateStore } from '../../StoreContext';
const StepThree = (props) => {
  const updateStore = UpdateStore();
  const store = Store();
  const [value, onChange] = useState(store?.pickUp_time ? store?.pickUp_time : '12:00');
  const [value2, onChange2] = useState(store?.return_time ? store?.return_time : '12:00');
  let [startAddress, setStartAddress] = useState({});
  let [endAddress, setEndAddress] = useState({});
  let [returnAddress, setReturnAddress] = useState({});

  console.log(startAddress, 'startAddress');
  console.log(value);
  const [item, setItem] = useState({
    step3: {
      pickUp_date: '',
      pickUp_time: '',
      return_date: '',
      return_time: '',
      pickUp_address: '',
      destination_address: '',
      return_address: '',
    },
  });

  const handleTime = (e) => {
    console.log(e);
    setItem((prev) => {
      prev.step3.pickUp_time = e;
      return { ...prev };
    });
    updateStore({
      pickUp_time: e,
    });
  };

  useEffect(() => {
    setItem((prev) => {
      prev.step3.pickUp_time = value;
      return { ...prev };
    });
    updateStore({
      pickUp_time: value,
    });
  }, [value]);

  useEffect(() => {
    setItem((prev) => {
      prev.step3.return_time = value2;
      return { ...prev };
    });
    updateStore({
      return_time: value2,
    });
  }, [value2]);

  const disableDates = () => {
    var today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (dd < 10) {
      dd = '0';
    }
    return yyyy + '-' + mm + '-' + dd;
  };

  let init_pickUp_date;
  let init_pickUp_date2;
  const handelBtn = (e) => {
    if (e.target.name == 'pickUp_date') {
      init_pickUp_date = e.target.value;
      setItem((prev) => {
        prev.step3.pickUp_date = init_pickUp_date;
        return { ...prev };
      });
      updateStore({
        pickUp_date: init_pickUp_date,
      });
    }
    if (e.target.name == 'return_date') {
      init_pickUp_date2 = e.target.value;

      setItem((prev) => {
        prev.step3.return_date = init_pickUp_date2;
        return { ...prev };
      });
      updateStore({
        return_date: init_pickUp_date2,
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
  //return_time
  console.log(store.pickUp_address, 'store.pickUp_address');
  console.log(store.pickUp_time, 'store.pickUp_time');
  console.log(store.return_time, 'store.return_time');
  console.log(store.destination_address, 'store.destination_address');
  console.log(store.return_address, 'store.return_address');
  console.log(store.pickUp_date, 'store.pickUp_date');
  console.log(store.return_date, 'store.return_date');

  return (
    <div className="stepOne_main">
      <h5 className="section_headers">Remplissez le formulaire !</h5>

      {/* one  */}
      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }} className="boxStepers">
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Siz ">Aller le ?</h5>

            <TextField
              className="custom_input_children_inner2 custom_input_children_inner2_mobile"
              id="input-date"
              locale={'en-gb'}
              placeholder={'Select Date'}
              type="date"
              min={disableDates()}
              value={store?.pickUp_date?.split('T')[0]}
              name="pickUp_date"
              onChange={handelBtn}
              // className="btnStepers btnsteper_special"
            />
          </div>
          <div className="btn-flex-grop btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">Heure de ramassage </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <div className="TimePicker-ss">
                  <TimePicker
                    style={{ height: 'calc(1.5em + 1.25rem + 2px)' }}
                    name="time"
                    // className="custom_input_children_inner"
                    disableClock={true}
                    clockIcon={null}
                    amPmAriaLabel={true}
                    value={store.pickUp_time}
                    onChange={(e) => {
                      updateStore({
                        pickUp_time: e,
                      });
                    }}
                  />
                </div>
              </FormControl>
            </Box>
          </div>
        </div>
      </Box>

      {/* second  */}

      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }} className="boxStepers box-top3">
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">Adresse de prise en charge</h5>
            <Box sx={{ minWidth: 120 }} className="input_add_custom">
              <FormControl fullWidth className="custom_input_children_inner2_input">
                {/* <utInputLabel id="demo-simple-select-label" ></utInputLabel> */}

                <AddressInput
                  style={{ maxWidth: '100%' }}
                  id="boxStepers_input_sm"
                  label="adresse de ramassage"
                  address={Object.values(startAddress).length > 1 ? startAddress : store.pickUp_address}
                  setAddress={setStartAddress}
                />
              </FormControl>
            </Box>
          </div>
          <div className="btn-flex-grop btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse de destination
              <span className="optonal_span"> facultatif</span>
            </h5>
            <Box sx={{ minWidth: 120 }} className="box-leftmove input_add_custom2  ">
              <FormControl fullWidth className="custom_input_children_inner2_input custom_input_children_inner2_input22 ">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <AddressInput
                  label="adresse de destination"
                  address={Object.values(endAddress).length > 1 ? endAddress : store.destination_address}
                  setAddress={setEndAddress}
                />
              </FormControl>
            </Box>
          </div>
        </div>
      </Box>

      {/* third  */}

      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }} className="boxStepers box-top3">
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Retour le <span className="optonal_span">facultatif</span>
            </h5>
            <TextField
              // className="form-control-alternative"
              className="custom_input_children_inner2 custom_input_children_inner2_mobile"
              id="input-date"
              locale={'en-gb'}
              placeholder={'Select Date'}
              type="date"
              min={disableDates()}
              value={store?.return_date?.split('T')[0]}
              name="return_date"
              onChange={handelBtn}
              // className="btnStepers btnsteper_special"
            />
          </div>
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Heure de ramassage <span className="optonal_span">facultatif</span>
            </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <div className="TimePicker-ss">
                  <TimePicker
                    style={{ height: 'calc(1.5em + 1.25rem + 2px)' }}
                    name="time"
                    disableClock={true}
                    clockIcon={null}
                    amPmAriaLabel={true}
                    value={store?.return_time}
                    onChange={(e) => {
                      updateStore({
                        return_time: e,
                      });
                    }}
                  />
                </div>
              </FormControl>
            </Box>
          </div>
        </div>
      </Box>

      {/* four */}
      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }} className="boxStepers box-top3">
        <div className="section_headers_button_group spte_3_btn-grroup">
          <div className="btn-flex-grop cm-view-btn-group">
            <h5 className="section_headers_2 hange-Fonts-Size">
              Adresse retour (si différente) <span className="optonal_span"> facultatif</span>
            </h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth className="custom_input_children_inner2_input">
                {/* <InputLabel id="demo-simple-select-label" ></InputLabel> */}
                <AddressInput
                  style={{ maxWidth: '100%' }}
                  id="boxStepers_input_sm"
                  label="adresse de retour"
                  address={Object.values(returnAddress).length > 1 ? returnAddress : store.return_address}
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
