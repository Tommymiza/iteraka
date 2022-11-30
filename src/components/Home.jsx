import { PublicRounded, ExpandMoreOutlined } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import "../styles/home.scss";
import Btn from "./Outils/button";
import { ActContext } from "../App";
import i18n from "i18next";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Svg from "./Outils/svg";

const Home = () => {
  const { t } = useContext(ActContext);
  const [panel, setPanel] = useState(false);
  const fillPath = [
    {
      x1: "150px",
      y1: "200vh",
      x2: "41%",
      y2: "180vh",
    },
    {
      x1: "calc(100% - 150px)",
      y1: "158vh",
      x2: "50%",
      y2: "168vh",
    },
    {
      x1: "150px",
      y1: "108vh",
      x2: "52%",
      y2: "120vh",
    },
    {
      x1: "calc(100% - 150px)",
      y1: i18n.language.substring(0, 2) === "fr" ? "60vh" : "58vh",
      x2: "49%",
      y2: "88vh",
    },
    {
      x1: "150px",
      y1: "0",
      x2: "35%",
      y2: "10vh",
    },
  ];
  const textPanel = [
    {
      id: "panel1",
      title: t("home.tree.0.title"),
      content: t("home.tree.0.content"),
      top: "50vh",
      left: "0",
    },
    {
      id: "panel2",
      title: t("home.tree.1.title"),
      content: t("home.tree.1.content"),
      top: "0",
      left: "calc(100% - 300px)",
    },
    {
      id: "panel3",
      title: t("home.tree.2.title"),
      content: t("home.tree.2.content"),
      top: "-50vh",
      left: "0",
    },
    {
      id: "panel4",
      title: t("home.tree.3.title"),
      content: t("home.tree.3.content"),
      top: "-100vh",
      left: "calc(100% - 300px)",
    },
    {
      id: "panel5",
      title: t("home.tree.4.title"),
      content: t("home.tree.4.content"),
      top: "-160vh",
      left: "0",
    },
  ];
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  const handleChange = (e, isExpanded, panel) => {
    setPanel(isExpanded ? panel : false);
  };
  useEffect(() => {
    document.title = "iTeraka";
    window.scrollTo({ top: 0, left: 0 });
    function reverseScrolling() {
      if (
        document.getElementById("home") &&
        window.scrollY >= document.getElementById("home").offsetHeight
      ) {
        document.querySelector("#content img").style.transform = `translateY(${
          (window.scrollY - document.getElementById("home").offsetHeight) * 2.5
        }px)`;
        document.querySelector("#text-content").style.transform = `translateY(${
          (window.scrollY - document.getElementById("home").offsetHeight) * 2.5
        }px)`;
      }
    }
    window.addEventListener("scroll", reverseScrolling);
    return () => {
      window.removeEventListener("scroll", reverseScrolling);
    };
  }, []);
  return (
    <>
      <div id="home">
        <div>
          <h1>{t("home.welcome")}</h1>
          <h3>" {t("home.first")} "</h3>
        </div>
        <Btn
          action={handleClick}
          text={t("home.btn_go")}
          icon={<PublicRounded />}
          w={i18n.language.substring(0, 2) === "fr" ? 100 : 120}
        />
        <Svg top={true} />
      </div>
      <div id="content">
        <img src="/images/arbre.png" alt="Arbre" />
        <div id="text-content">
          <svg>
            {fillPath.map((item, index) => (
              <line
                key={index}
                x1={item.x1}
                y1={item.y1}
                x2={item.x2}
                y2={item.y2}
                stroke="black"
                strokeWidth={3}
              />
            ))}
            {fillPath.map((item, index) => (
              <circle
                key={index}
                r={8}
                cx={item.x2}
                cy={item.y2}
                stroke="white"
                fill="red"
                strokeWidth={3}
              />
            ))}
          </svg>
          {textPanel.map((item) => (
            <div key={item.id}>
              <Accordion
                sx={{
                  position: "absolute",
                  top: item.top,
                  left: item.left,
                  borderRadius: "7px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.5)",
                  background:
                    panel === item.id ? "white" : "rgba(255,255,255,0.5)",
                  width: "300px",
                }}
                id={item.id}
                expanded={panel === item.id}
                onChange={(e, isExpanded) =>
                  handleChange(e, isExpanded, item.id)
                }
              >
                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                  <h4>{item.title}</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{item.content}</p>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
