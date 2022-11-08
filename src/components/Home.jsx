import { PublicRounded, InfoSharp } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import "../styles/home.scss";
import Btn from "./Outils/button";
import { ActContext } from "../App";
import i18n from "i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useContext(ActContext);
  const navigate = useNavigate();
  const handleClick = () => {
    document.querySelector("#content").scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "auto" });
  }, []);
  return (
    <>
      <div id="home">
        <h1>{t("home.welcome")}</h1>
        <p>" {t("home.first")} "</p>
        <Btn
          action={handleClick}
          text={t("home.btn_go")}
          icon={<PublicRounded />}
          w={i18n.language === "fr" ? 100 : 120}
        />
      </div>
      <div id="content">
        <div className="section-one">
          <div>
            <p>{t("home.second")}</p>
            <div>
              <img src="./images/IMG_8414.jpg" alt="illustration" />
              <div>
                <p>
                  {t("home.third")}
                  <br />
                  <br />
                  {t("home.four")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutus">
        <Btn
          action={() => {
            navigate("/about-us");
          }}
          text={t("about")}
          icon={<InfoSharp />}
          w={i18n.language === "fr" ? 200 : 120}
        />
      </div>
      <div id="partners">
        <h3>{t("partner")}</h3>
        <ul>
          <li>
            <a
              href="https://asafrance-madagascar.org/"
              rel="noreferrer"
              target={"_blank"}
            >
              {t("ourPartners.0")}
            </a>
          </li>
          <li>{t("ourPartners.1")}</li>
          <li>
            <a
              href="https://program.tist.org"
              rel="noreferrer"
              target={"_blank"}
            >
              {t("ourPartners.2")}
            </a>
            <img src="/images/tisisi.png" alt="tist logo" />
          </li>
          <li>
            <a href="https://anjajavy.com/" rel="noreferrer" target={"_blank"}>
              {t("ourPartners.3")}
            </a>
            <img
              src="/images/anjajavy_blanc.png"
              alt="Anjajavy logo"
              style={{ width: "200px" }}
            />
          </li>
          <li>
            <a href="https://www.unima.com/" rel="noreferrer" target={"_blank"}>
              {t("ourPartners.4")}
            </a>
            <img
              src="/images/Unima-logo.svg"
              alt="Unima Logo"
              style={{ width: "200px" }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
