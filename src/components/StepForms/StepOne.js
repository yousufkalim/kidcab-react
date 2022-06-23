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
      Vous: [],
      Type: [],
      Fréquence: "",
      Pour: [],
    },
  });


  const [alignment, setAlignment] = React.useState("left");

  console.log(alignment, "-alignment");

  const Vous = [
    "Un particulier",
    "Une mairie",
    "Une Collectivite",
    "Une ecole",
    "Un club de sport",
    "Une entrprise",
    "Un comite",
  ];

  const Type = ["Aller Simple", "Aller - Retour", "Trajet avec etape(s)"];

  const Fréquence = ["Reguliere", "Occasionnelle"];

  const Pour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  const style1 = {
    color: "white",
    backgroundColor: "#4db9b4",
  };
  const style2 = {
    background: "#F8FCFB",
    border: "1px solid #DFEEEB",
  };

  const handelBtn = (e) => {
    if (item.step1.Vous.includes(e.target.innerHTML)) {
      let index = item.step1.Vous.indexOf(e.target.innerHTML);

      setItem((prev) => {
        prev.step1.Vous.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.Vous.push(e.target.innerHTML);
        return { ...prev };
      });
    props.passData(item);
  };

  const handelBtn2 = (e) => {
    if (item.step1.Type.includes(e.target.innerHTML)) {
      let index = item.step1.Type.indexOf(e.target.innerHTML);

      setItem((prev) => {
        prev.step1.Type.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.Type.push(e.target.innerHTML);
        return { ...prev };
      });
    props.passData(item);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setItem((prev) => {
      prev.step1.Fréquence = newAlignment;
      return { ...prev };
    });
    props.passData(item);
  };

  const handelBtn3 = (e) => {
    if (item.step1.Fréquence.includes(e.target.innerHTML)) {
      let index = item.step1.Fréquence.indexOf(e.target.innerHTML);

      setItem((prev) => {
        prev.step1.Fréquence.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.Fréquence.push(e.target.innerHTML);
        return { ...prev };
      });
    props.passData(item);
  };

  const handelBtn4 = (e) => {
    if (item.step1.Pour.includes(e.target.innerHTML)) {
      let index = item.step1.Pour.indexOf(e.target.innerHTML);

      setItem((prev) => {
        prev.step1.Pour.splice(index, 1);
        return { ...prev };
      });
    } else
      setItem((prev) => {
        prev.step1.Pour.push(e.target.innerHTML);
        return { ...prev };
      });

    props.passData(item);
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
        <h5 className="section_headers_2 hange-Fonts-Size">Vous êtes ?</h5>

        <div className="section_headers_button_group">
          {Vous.map((obj, i) => {
            return (
              <button
                onClick={(e) => handelBtn(e)}
                style={
                  item.step1.Vous.find((e) => {
                    if (e === obj) return true;
                  })
                    ? style1
                    : style2
                }
                className="btnStepers"
              >
                {obj}
              </button>
            );
          })}
        </div>
      </Box>

      {/* second  */}

      <Box
        lg={{ width: "100%" }}
        md={{ width: "100%" }}
        sm={{ width: "100%" }}
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">Type de trajet?</h5>

        <div className="section_headers_button_group">
          {Type.map((obj, i) => {
            return (
              <button
                onClick={(e) => handelBtn2(e)}
                style={
                  item.step1.Type.find((e) => {
                    if (e === obj) return true;
                  })
                    ? style1
                    : style2
                }
                className="btnStepers"
              >
                {obj}
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
          Fréquence des trajets
        </h5>

        <div className="section_headers_button_group">
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
          >
            {Fréquence.map((obj, i) => {
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
        className="boxStepers"
      >
        <h5 className="section_headers_2 hange-Fonts-Size">
          Pour un besoin réguliers, jours des trajets
        </h5>

        <div className="section_headers_button_group">
          {Pour.map((obj, index) => {
            return (
              <button
                className="btnStepers"
                onClick={(e) => handelBtn4(e)}
                style={
                  item.step1.Pour.find((e) => {
                    if (e === obj) return true;
                  })
                    ? style1
                    : style2
                }
              >
                {obj}
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
