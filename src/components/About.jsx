import React, { useContext, useEffect } from "react";
import "../styles/about.scss";
import { ActContext } from "../App";
import Btn from "./Outils/button";
import { useNavigate } from "react-router-dom";
import { AccountTree } from "@mui/icons-material";

const About = () => {
  const { t } = useContext(ActContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "auto" });
  }, []);
  return (
    <>
      <div className="about" style={{ paddingTop: "200px" }}>
        <div>
          <h3>{t("about")}</h3>
          <p>{t("aboutText1")}</p>
          <p>{t("aboutText2")}</p>
        </div>
        <div>
          <img
            src="./images/IMG_1926.jpg"
            alt="illustration"
            style={{ boxShadow: "5px 5px 15px rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>
      <div className="about reverse">
        <div>
          <h3>{t("our")}</h3>
          <p>{t("ourTeam.0")}</p>
          <p>{t("ourTeam.1")}</p>
        </div>
        <div>
          <img
            src="./images/ricardo-iv-tamayo-uPbatdSi7YQ-unsplash.jpg"
            alt="illustration"
            style={{ boxShadow: "-5px 5px 15px rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>
      <div className="about" style={{ marginBottom: "250px" }}>
        <Btn
          action={() => {
            navigate("/project");
          }}
          text={t("navbar.menus.2")}
          icon={<AccountTree />}
          w={150}
        />
      </div>
    </>
  );
};

export default About;
