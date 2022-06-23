import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import KidcabChauffeu from "../../assets/Kidcab_chauffeu.png";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const StepOne = (props) => {
  const [item, setItem] = useState({
    step1: {
      your_are: "",
      journey_type: [],
      journey_frequency: "",
      days: [],
    },
  });

  console.log(item);

  const [alignment, setAlignment] = React.useState("left");
  const [alignmentvous, setAlignmentvous] = React.useState("left");

  const your_are = [
    { "Un particulier": "A Particular" },
    { "Une mairie": "A town hall" },
    { "Une Collectivite": "A Community" },
    { "Une ecole": "School" },
    { "Un club de sport": "A sports club" },
    { "Une entrprise": "A company" },
    { "Un comite": "A committee" },
  ];

  const journey_type = [
    { "Aller Simple": "One Way ticket" },
    { "Aller - Retour": "Round trip" },
    { "Trajet avec etape(s)": "Journey with stage(s)" },
  ];

  const journey_frequency = [
    { Reguliere: "Regular" },
    { Occasionnelle: "Occasional" },
  ];

  const days = [
    { Lundi: "Monday" },
    { Mardi: "Tuesday" },
    { Mercredi: "Wednesday" },
    { Jeudi: "Thursday" },
    { Vendredi: "Friday" },
    { Samedi: "Saturday" },
  ];

  const style1 = {
    color: "white",
    backgroundColor: "#4db9b4",
  };
  const style2 = {
    background: "#F8FCFB",
    border: "1px solid #DFEEEB",
  };

  const handelBtn2 = (e) => {
    if (item.step1.journey_type.includes(e.target.value)) {
      let index = item.step1.journey_type.indexOf(e.target.value);

      setItem((prev) => {
        prev.step1.journey_type.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.journey_type.push(e.target.value);
        return { ...prev };
      });
    props.passData(item);
  };

  const handleAlignment = (event, newAlignment) => {
    console.log(event.target.value, "event.target.value");
    setAlignment(event.target.value);
    setItem((prev) => {
      prev.step1.journey_frequency = event.target.value;
      return { ...prev };
    });
    props.passData(item);
  };

  const handleAlignmentvous = (event, newAlignment) => {
    console.log(event.target.value, "e");
    setAlignmentvous(event.target.value);
    setItem((prev) => {
      prev.step1.your_are = event.target.value;
      return { ...prev };
    });
    props.passData(item);
  };

  const handelBtn4 = (e) => {
    console.log("handelBtn4");
    if (item.step1.days.includes(e.target.value)) {
      let index = item.step1.days.indexOf(e.target.value);

      setItem((prev) => {
        prev.step1.days.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.days.push(e.target.value);
        return { ...prev };
      });

    props.passData(item);
  };

  console.log(item, "-item");

  return (
    <div className="stepOne_main">
      <h5 className="section_headers">
        *Choisissez-en un days chaque question !
      </h5>
      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">your_are êtes ?</h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            value={alignmentvous}
            exclusive
            onChange={handleAlignmentvous}
          >
            {your_are.map((obj, i) => {
              return (
                <ToggleButton
                  className="btnStepers"
                  name={Object.keys(obj)}
                  value={Object.values(obj)}
                >
                  {Object.keys(obj)}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>
      </Box>

      {/* second  */}

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">
          journey_type de trajet?
        </h5>

        <div className="section_headers_button_group">
          {journey_type.map((obj, i) => {
            return (
              <button
                onClick={(e) => handelBtn2(e)}
                style={
                  item.step1.journey_type.find((e) => {
                    if (e === obj) return true;
                  })
                    ? style1
                    : style2
                }
                className="btnStepers"
                name={Object.keys(obj)}
                value={Object.values(obj)}
              >
                {Object.keys(obj)}
              </button>
            );
          })}
        </div>
      </Box>

      {/* third  */}

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">
          journey_frequency des trajets
        </h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
          >
            {journey_frequency.map((obj, i) => {
              return (
                <ToggleButton
                  className="btnStepers"
                  name={Object.keys(obj)}
                  value={Object.values(obj)}
                >
                  {Object.keys(obj)}
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
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">
          days un besoin réguliers, jours des trajets
        </h5>

        <div className="section_headers_button_group">
          {days.map((obj, index) => {
            return (
              <button
                className="btnStepers"
                onClick={(e) => handelBtn4(e)}
                style={
                  item.step1.days.find((e) => {
                    if (e === obj) return true;
                  })
                    ? style1
                    : style2
                }
                name={Object.keys(obj)}
                value={Object.values(obj)}
              >
                {Object.keys(obj)}
              </button>
            );
          })}
        </div>
      </Box>
      {/* <div className="sep1PictureBox">
        <img src={KidcabChauffeu} />
      </div> */}
    </div>
  );
};

export default StepOne;
