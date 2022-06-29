import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import KidcabChauffeu from "../../assets/Kidcab_chauffeu.png";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Store, UpdateStore } from "../../StoreContext";
const StepOne = (props) => {
  const updateStore = UpdateStore();
  const store = Store();
  const [item, setItem] = useState({
    step1: {
      your_are: "",
      journey_type: [], // E
      journey_typef: [], // F
      journey_frequency: "",
      days: [],
      daysf: [], // F
    },
  });

  console.log(item);

  const [alignment, setAlignment] = React.useState("left");
  const [alignmentvous, setAlignmentvous] = React.useState("Un particulier");

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
    { "Aller-Simple": "One Way ticket" },
    { "Aller-Retour": "Round trip" },
    { "Trajet-avec-etape(s)": "Journey with stage(s)" },
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

  let init_journey_type;
  let init_journey_typef;
  let init_journey_typename;
  let init_journey_typenamef;

  const handelBtn2 = (e) => {
    init_journey_type = e.target.name; // E
    init_journey_typef = e.target.value; // F

    if (
      item.step1.journey_type.includes(init_journey_type) &&
      item.step1.journey_typef.includes(init_journey_typef)
    ) {
      let index = item.step1.journey_type.indexOf(init_journey_type);
      let index2 = item.step1.journey_typef.indexOf(init_journey_typef);

      setItem((prev) => {
        prev.step1.journey_type.splice(index, 1);
        prev.step1.journey_typef.splice(index2, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.journey_type.push(init_journey_type);
        prev.step1.journey_typef.push(init_journey_typef);
        return { ...prev };
      });
    props.passData(item);
    updateStore({
      journey_type: item.step1.journey_typef,
      journey_typeE: item.step1.journey_type,
    });
  };

  let init_journey_frequency;
  const handleAlignment = (event, newAlignment) => {
    // console.log()
    init_journey_frequency = event.target.name;
    updateStore({
      journey_frequency: newAlignment,
      journey_frequencyE: event.target.name,
    });
    setAlignment(newAlignment);
    setItem((prev) => {
      prev.step1.journey_frequency = init_journey_frequency;
      return { ...prev };
    });
    props.passData(item);
  };

  let init_your_are;
  const handleAlignmentvous = (event, newAlignment) => {
    console.log(event.target.name, "-jkdhdsj");
    updateStore({
      your_are: newAlignment,
      your_areE: event.target.name,
    });
    init_your_are = event.target.name;
    setAlignmentvous(newAlignment);

    setItem((prev) => {
      prev.step1.your_are = init_your_are;
      return { ...prev };
    });
    props.passData(item);
  };

  let init_days;
  let init_daysf;
  const handelBtn4 = (e) => {
    init_days = e.target.name; // e
    init_daysf = e.target.value; // f

    if (
      item.step1.days.includes(init_days) &&
      item.step1.daysf.includes(init_daysf)
    ) {
      let index = item.step1.days.indexOf(init_days);
      let index2 = item.step1.daysf.indexOf(init_daysf);

      setItem((prev) => {
        prev.step1.days.splice(index, 1);
        prev.step1.daysf.splice(index2, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.days.push(init_days);
        prev.step1.daysf.push(init_daysf);
        return { ...prev };
      });
    updateStore({
      ...days,
      days: item.step1.daysf,
      daysE: item.step1.days,
    });
    props.passData(item);
  };

  console.log(item, "-item");
  console.log(store.your_are, "store.your_are");
  //alignmentvous
  console.log(alignmentvous, "alignmentvous");
  console.log(store.journey_type, "store.journey_type");
  console.log(store.journey_frequency, "store.journey_frequency");
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
            value={store.your_are}
            exclusive
            onChange={handleAlignmentvous}
            // aria-label="text alignment"
          >
            {your_are.map((obj, i) => {
              return (
                <ToggleButton
                  className="btnStepers"
                  value={JSON.stringify(Object.keys(obj))}
                  name={Object.values(obj)}
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
                  store.journey_type.find((e) => {
                    // init_journey_typenamef = JSON.stringify(Object.keys(obj))
                    if (e === JSON.stringify(Object.keys(obj))) return true;
                  })
                    ? style1
                    : style2
                }
                className="btnStepers"
                value={JSON.stringify(Object.keys(obj))}
                name={Object.values(obj)}
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
            value={store.journey_frequency}
            exclusive
            onChange={handleAlignment}
          >
            {journey_frequency.map((obj, i) => {
              return (
                <ToggleButton
                  className="btnStepers"
                  value={JSON.stringify(Object.keys(obj))}
                  name={Object.values(obj)}
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
                  store.days.find((e) => {
                    if (e === JSON.stringify(Object.keys(obj))) return true;
                  })
                    ? style1
                    : style2
                }
                value={JSON.stringify(Object.keys(obj))}
                name={Object.values(obj)}
              >
                {Object.keys(obj)}
              </button>
            );
          })}
        </div>
      </Box>
      <div className="sep1PictureBox">
        <img src={KidcabChauffeu} />
      </div>
    </div>
  );
};

export default StepOne;
