import React, { useState } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Demanderpng from "../../assets/Demanderpng.png";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
const StepTwo = (props) => {
  const [item, setItem] = useState({
    step2: {
      Besoin: "",
      Nombre: "",
      Nombred: "",
      Bébé: "",
    },
  });
  const [alignment, setAlignment] = React.useState("left");
  const [alignmentNombre, setAlignmentNombre] = React.useState("left");
  const [alignmentNombred, setAlignmentNombred] = React.useState("left");
  const [alignmentBébé, setAlignmentBébé] = React.useState("left");

  const Besoin = ["Oui", "Non"];
  const Nombre = ["0", "1", "2", "3"];
  const Nombred = ["0", "1", "2", "3"];
  const Bébé = ["0", "1", "2", "3"];

  // Need door-to-door support?
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setItem((prev) => {
      prev.step2.Besoin = newAlignment;
      return { ...prev };
    });
    props.passData2(item);
  };

  // Number of childres
  const handleAlignmentNombre = (event, newAlignment) => {
    setAlignmentNombre(newAlignment);
    setItem((prev) => {
      prev.step2.Nombre = newAlignment;
      return { ...prev };
    });
    props.passData2(item);
  };

  const ChildFun = (e) => {

    setItem((prev) => {
      prev.step2.Nombre = e.target.value;
      return { ...prev };
    });
    props.passData2(item);
  }


  // input 

  // Number of adult(s) optional
  const handleAlignmentNombred = (event, newAlignment) => {
    setAlignmentNombred(newAlignment);
    setItem((prev) => {
      prev.step2.Nombred = newAlignment;
      return { ...prev };
    });
    props.passData2(item);
  };
  

  const AdultFun = (e) => {

    setItem((prev) => {
      prev.step2.Nombred = e.target.value;
      return { ...prev };
    });
    props.passData2(item);
  }

  // Infant(s) 3-4 years optional
  const handleAlignmentBébé = (event, newAlignment) => {
    setAlignmentBébé(newAlignment);
    setItem((prev) => {
      prev.step2.Bébé = newAlignment;
      return { ...prev };
    });
    props.passData2(item);
  };

  const BébéFun = (e) => {

    setItem((prev) => {
      prev.step2.Nombred = e.target.value;
      return { ...prev };
    });
    props.passData2(item);
  }














  const style1 = {
    color: "white",
    backgroundColor: "#4db9b4",
  };
  const style2 = {
    background: "#F8FCFB",
    border: "1px solid #DFEEEB",
  };

  console.log(item, "-item");

  return (
    <div className="stepOne_main">
      <h5 className="section_headers">
        *Choisissez-en un pour chaque question !
      </h5>
      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">
          Besoin d'accompagnement porte à porte ?
        </h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
          >
            {Besoin.map((obj, i) => {
              return (
                <ToggleButton className="btnStepers" value={obj}>
                  {obj}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>
      </Box>

    

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers border_section2_style"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">
          Nombre d'enfant(s)
        </h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            value={alignmentNombre}
            exclusive
            onChange={handleAlignmentNombre}
          >
            {Nombre.map((obj, i) => {
              return (
                <ToggleButton className="btnStepers" value={obj}>
                  {obj}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
          <TextField placeholder="Number of child(ren)  " type="number"
    
           onChange={(e) => ChildFun(e)}
           />
        </div>
      </Box>

      {/* third  */}

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers section_headers_3"
      >
        <h5 className="section_headers_2 hange-Fonts-Size custom-css-mobile">
          Nombre d'adulte(s) <span className="optonal_span">optional</span>
        </h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            value={alignmentNombred}
            exclusive
            onChange={handleAlignmentNombred}
          >
            {Nombred.map((obj, i) => {
              return (
                <ToggleButton className="btnStepers" value={obj}>
                  {obj}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
          <TextField placeholder="Nombre d'adulte " type="number"
           onChange={(e) => AdultFun(e)}
          />
        </div>
      </Box>

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size custom-css-mobile  ">
          Bébé(s) 3-4 ans <span className="optonal_span">optional</span>
        </h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            value={alignmentBébé}
            exclusive
            onChange={handleAlignmentBébé}

          >
            {Bébé.map((obj, i) => {
              return (
                <ToggleButton className="btnStepers" value={obj}>
                  {obj}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
          <TextField placeholder="Nombre d'adulte "  className="custom-css-mobile_b"   onChange={(e) => BébéFun(e)} type="number" />
        </div>
      </Box>
      {/* <div className="sep1PictureBox2">
        <img src={Demanderpng} />
      </div> */}
    </div>
  );
};

export default StepTwo;
