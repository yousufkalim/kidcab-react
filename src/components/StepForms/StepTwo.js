import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Demanderpng from '../../assets/Demanderpng.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { Store, UpdateStore } from '../../StoreContext';
const StepTwo = (props) => {
  const updateStore = UpdateStore();
  const store = Store();
  const [item, setItem] = useState({
    step2: {
      door_support: '',
      total_children: 0,
      total_adults: 0,
      baby: 0,
    },
  });
  const [alignment, setAlignment] = React.useState('left');
  const [alignmentNombre, setAlignmentNombre] = React.useState('left');
  const [alignmentNombred, setAlignmentNombred] = React.useState('left');
  const [alignmentBébé, setAlignmentBébé] = React.useState('left');

  const Besoin = [{ Oui: true }, { Non: false }];
  const Nombre = [1, 2, 3];
  const Nombred = [1, 2, 3];
  const Bébé = [1, 2, 3];

  // Need door-to-door support?
  let init_door_support;
  const handleAlignment = (event, newAlignment) => {
    console.log(event.target.name, 'event.target.name dOOR sUPPORT');
    init_door_support = event.target.name;
    setAlignment(newAlignment);
    setItem((prev) => {
      prev.step2.door_support = init_door_support;
      return { ...prev };
    });
    updateStore({
      door_support: event.target.name,
      door_supportS: newAlignment,
    });
    props.passData2(item);
  };
  console.log(store.door_support, 'door_supportstore');
  // Number of childres
  const handleAlignmentNombre = (event, newAlignment) => {
    setAlignmentNombre(newAlignment);
    setItem((prev) => {
      prev.step2.total_children = newAlignment;
      return { ...prev };
    });
    updateStore({
      total_children: newAlignment,
    });
    props.passData2(item);
  };
  //  input
  let init_total_children;
  const ChildFun = (e) => {
    init_total_children = e.target.value;
    setItem((prev) => {
      prev.step2.total_children = init_total_children;
      return { ...prev };
    });
    updateStore({
      total_children_tb: e.target.value,
    });
    props.passData2(item);
  };

  // input

  // Number of adult(s) optional
  const handleAlignmentNombred = (event, newAlignment) => {
    setAlignmentNombred(newAlignment);
    setItem((prev) => {
      prev.step2.total_adults = newAlignment;
      return { ...prev };
    });
    updateStore({
      total_adults: newAlignment,
    });
    props.passData2(item);
  };

  let init_adults;
  const AdultFun = (e) => {
    init_adults = e.target.value;
    setItem((prev) => {
      prev.step2.total_adults = init_adults;
      return { ...prev };
    });
    updateStore({
      total_adults_tb: e.target.value,
    });
    props.passData2(item);
  };

  // Infant(s) 3-4 years optional
  const handleAlignmentBébé = (event, newAlignment) => {
    setAlignmentBébé(newAlignment);
    setItem((prev) => {
      prev.step2.baby = newAlignment;
      return { ...prev };
    });
    updateStore({
      baby: newAlignment,
    });
    props.passData2(item);
  };

  const BébéFun = (e) => {
    console.log(e.target.value, 'e.target.value Bbay');
    setItem((prev) => {
      prev.step2.baby = e.target.value;
      return { ...prev };
    });
    updateStore({
      babyTb: e.target.value,
    });
    props.passData2(item);
  };
  return (
    <div className="stepOne_main">
      <h5 className="section_headers">Remplissez le formulaire !</h5>
      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }}>
        <h5 className="section_headers_2 hange-Fonts-Size">
          Besoin d'accompagnement porte à porte ?
        </h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            className="ButtonGroup-root"
            value={store.door_supportS}
            exclusive
            onChange={handleAlignment}
          >
            {Besoin.map((obj, i) => {
              return (
                <ToggleButton
                  className="boxStepers_btn_custom boxStepers_btn_customform2"
                  value={JSON.stringify(Object.values(obj))}
                  name={Object.keys(obj)}
                >
                  {Object.keys(obj)}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>
      </Box>

      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }}>
        <h5 className="section_headers_2 hange-Fonts-Size ">Nombre d'enfant(s)</h5>

        <div className="section_headers_button_group ">
          {store.total_children_tb === '' && (
            <ToggleButtonGroup
              className="ButtonGroup-root"
              value={store.total_children}
              exclusive
              onChange={handleAlignmentNombre}
            >
              {Nombre.map((obj, i) => {
                return (
                  <ToggleButton
                    className="boxStepers_btn_custom boxStepers_btn_custom2 number-container"
                    value={obj}
                    name={obj}
                  >
                    {obj}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          )}
          {!store.total_children && (
            <div className="custom_input_children">
              <TextField
                className="custom_input_children_inner"
                placeholder="autre valeur "
                type="number"
                value={store.total_children_tb}
                onChange={(e) => ChildFun(e)}
              />
            </div>
          )}
        </div>
      </Box>

      {/* third  */}

      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }}>
        <h5 className="section_headers_2 hange-Fonts-Size custom-css-mobile">
          Nombre d'adulte(s) <span className="optonal_span">facultatif</span>
        </h5>

        <div className="section_headers_button_group">
          {store.total_adults_tb === '' && (
            <ToggleButtonGroup
              className="ButtonGroup-root"
              value={store.total_adults}
              exclusive
              onChange={handleAlignmentNombred}
            >
              {Nombred.map((obj, i) => {
                return (
                  <ToggleButton
                    className="boxStepers_btn_custom boxStepers_btn_custom2 number-container"
                    value={obj}
                  >
                    {obj}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          )}
          {!store.total_adults && (
            <div className="custom_input_children">
              <TextField
                className="custom_input_children_inner"
                placeholder="autre valeur "
                type="number"
                value={store.total_adults_tb}
                onChange={(e) => AdultFun(e)}
              />
            </div>
          )}
        </div>
      </Box>

      <Box lg={{ width: '100%' }} md={{ width: '100%' }} sm={{ width: '100%' }}>
        <h5 className="section_headers_2 hange-Fonts-Size custom-css-mobile3">
          Bébé(s) 3-4 ans <span className="optonal_span">facultatif</span>
        </h5>

        <div className="section_headers_button_group ">
          {store.babyTb == '' && (
            <ToggleButtonGroup
              className="ButtonGroup-root"
              value={store.baby}
              exclusive
              onChange={handleAlignmentBébé}
            >
              {Bébé.map((obj, i) => {
                return (
                  <ToggleButton
                    // className="btnStepers btnStepers-s "
                    className="boxStepers_btn_custom boxStepers_btn_custom2  number-container"
                    value={obj}
                  >
                    {obj}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          )}
          {!store.baby && (
            <div className="custom_input_children">
              <TextField
                className="custom_input_children_inner"
                placeholder="autre valeur"
                onChange={(e) => BébéFun(e)}
                value={store.babyTb}
                type="number"
              />
            </div>
          )}
        </div>
      </Box>
      <div className="sep1PictureBox2">
        <img src={Demanderpng} />
      </div>
    </div>
  );
};

export default StepTwo;
