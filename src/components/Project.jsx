import React, { useEffect, useContext } from "react";
import "../styles/projet.scss";
import { ActContext } from "../App";
import { CheckCircle, AlternateEmail } from "@mui/icons-material";
import Btn from "./Outils/button";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";

const Project = () => {
  const navigate = useNavigate()
  const { t } = useContext(ActContext);
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "auto" });
  }, []);
  return (
    <>
      <div className="project" style={{ paddingTop: "200px" }}>
        <div style={{ maxWidth: "100%" }}>
          <h3>{t("OurMissionTitle")}</h3>
          <p style={{ fontSize: "20px" }}>{t("OurMission")}</p>
        </div>
      </div>
      <div className="project">
        <div style={{alignSelf: "flex-start"}}>
          <h3>{t("what")}</h3>
          <ul>
            <li>{t("whatDo.0")}</li>
            <li>{t("whatDo.1")}</li>
            <li>{t("whatDo.2")}</li>
            <li>{t("whatDo.3")}</li>
            <li>{t("whatDo.4")}</li>
          </ul>
        </div>
        <div style={{alignSelf: "flex-start"}}>
          <h3>{t("how")}</h3>
          <p>{t("howDo.0.title")}</p>
          <ul style={{ marginLeft: "10px" }}>
            <li>{t("howDo.0.elem.0")}</li>
            <li>{t("howDo.0.elem.1")}</li>
            <li>{t("howDo.0.elem.2")}</li>
          </ul>
        </div>
      </div>
      <div className="project" style={{gap: "30px"}}>
        <div>
          <h3>{t("quality")}</h3>
          <ul id="quality">
            <li>
              <div>
                <CheckCircle sx={{ color: "var(--primary)" }} />
                <h4>{t("qualityCriteria.0.title")}</h4>
              </div>
            </li>
            <li>
              <div>
                <CheckCircle sx={{ color: "var(--primary)" }} />
                <h4>{t("qualityCriteria.1.title")}</h4>
              </div>
              <div>
                <ul style={{ marginLeft: "10px"}}>
                  <li>{t("qualityCriteria.1.elem.0")}</li>
                  <li>{t("qualityCriteria.1.elem.1")}</li>
                  <li>{t("qualityCriteria.1.elem.2")}</li>
                </ul>
              </div>
            </li>
            <li>
            <div>
                <CheckCircle sx={{ color: "var(--primary)" }} />
                <h4>{t("qualityCriteria.2.title")}</h4>
              </div>
              <div>
                <ul style={{ marginLeft: "10px"}}>
                  <li>{t("qualityCriteria.2.elem.0")}</li>
                  <li>{t("qualityCriteria.2.elem.1")}</li>
                  <li>{t("qualityCriteria.2.elem.2")}</li>
                  <li>{t("qualityCriteria.2.elem.3")}</li>
                </ul>
              </div>
            </li>
            <li>
            <div>
                <CheckCircle sx={{ color: "var(--primary)" }} />
                <h4>{t("qualityCriteria.3.title")}</h4>
              </div>
              <div>
                <ul style={{ marginLeft: "10px"}}>
                  <li>{t("qualityCriteria.3.elem.0")}</li>
                  <li>{t("qualityCriteria.3.elem.1")}</li>
                  <li>{t("qualityCriteria.3.elem.2")}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="./images/medium-shot-smiley-boy-picking-cocoa-beans.jpg"
            alt="illustration"
            style={{ boxShadow: "5px 5px 15px rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>
      <div className="about" style={{ marginBottom: "250px" }}>
        <Btn
          action={() => {
            navigate("/contact");
          }}
          text={t("contact")}
          icon={<AlternateEmail />}
          w={i18n.language === "en" ? 130 : 170}
        />
      </div>
    </>
  );
};

export default Project;
