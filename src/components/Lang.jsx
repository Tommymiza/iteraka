import React from "react";
import i18n from "i18next";

const Lang = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        color: "black",
        fontWeight: "bolder",
        padding: "5px",
        fontSize: "15px",
        border: "solid 2px black",
        borderRadius: "7px",
      }}
    >
      <p
        onClick={() => {
          i18n.changeLanguage("fr-FR");
          localStorage.setItem("lang", "fr-FR");
        }}
        style={{
          margin: 0,
          cursor: "pointer",
          color:
            i18n.language.substring(0, 2) === "fr" ? "var(--primary)" : "black",
        }}
      >
        Fr
      </p>
      <p style={{ margin: 0 }}>&nbsp;|&nbsp;</p>
      <p
        onClick={() => {
          i18n.changeLanguage("en-EN");
          localStorage.setItem("lang", "en-EN");
        }}
        style={{
          margin: 0,
          cursor: "pointer",
          color:
            i18n.language.substring(0, 2) === "en" ? "var(--primary)" : "black",
        }}
      >
        En
      </p>
    </div>
  );
};

export default Lang;
