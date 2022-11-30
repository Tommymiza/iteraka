import React, { useContext, useEffect } from "react";
import "../styles/about.scss";
import { ActContext } from "../App";
import Btn from "./Outils/button";
import { useNavigate } from "react-router-dom";
import { AccountTree } from "@mui/icons-material";
import Svg from "./Outils/svg";

const About = () => {
  const { t } = useContext(ActContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "iTeraka | about";
    window.scrollTo({top: 0, left: 0});
  }, []);
  return (
    <>
      <div id="firstAbout">
        <h1>" {t("about")} "</h1>
      </div>
      <div style={{ marginTop: "calc(100vh - 50px)",transform: "translateY(10px)" }}>
        <Svg top={true} />
      </div>
      <div className="about reverse">
        <div>
          <p>{t("aboutText1")}</p>
          <p>{t("aboutText2")}</p>
          <p>{t("aboutText3")}</p>
        </div>
        <div>
          <img
            src="./images/IMG_1926.jpg"
            alt="illustration"
            style={{ boxShadow: "-5px 5px 15px rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          zIndex: 2,
          transform: "translateY(-10px)",
        }}
      >
        <Svg top={false} />
      </div>
      <div style={{ height: "80vh", position: "relative" }}>
        <div
          className="bg"
          style={{ backgroundImage: "url('/images/IMG_8414.jpg')" }}
        ></div>
        <div className="text">
          <Btn
            action={() => {
              navigate("/project");
            }}
            text={t("navbar.menus.2")}
            icon={<AccountTree />}
            w={150}
          />
        </div>
      </div>
    </>
  );
};

export default About;
