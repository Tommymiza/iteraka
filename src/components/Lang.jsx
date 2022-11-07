import React from 'react';
import i18n  from 'i18next';

const Lang = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            color: "black",
            fontWeight: "bolder",
            padding: "5px",
            fontSize: "15px",
            border: "solid 2px black",
            borderRadius: "7px",
        }}>
            <p onClick={()=>{i18n.changeLanguage("fr")}} style={{margin: 0, cursor: "pointer", color: i18n.language === "fr" ? "var(--primary)" : "black"}}>Fr</p>
            <p style={{margin: 0}}>&nbsp;|&nbsp;</p>
            <p onClick={()=>{i18n.changeLanguage("en")}} style={{margin: 0, cursor: "pointer", color: i18n.language === "en" ? "var(--primary)" : "black"}}>En</p>
        </div>
    );
}

export default Lang;
