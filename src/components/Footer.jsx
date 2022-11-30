import React from "react";
import { IconButton } from "@mui/material";
import {
  KeyboardArrowUpRounded,
  HomeRounded,
  LocalPhone,
} from "@mui/icons-material";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <IconButton
        sx={{
          position: "absolute",
          top: -10,
          right: 20,
          background: "var(--primary)",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <KeyboardArrowUpRounded />
      </IconButton>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <img
          src="/images/Logo.png"
          alt="logo"
          width={250}
          style={{ objectFit: "contain" }}
        />
        <ul>
          <li>
            <HomeRounded />
            <p>: </p>
            <div>
              <p>21 rue du Col de Dyane</p>
              <p>78180 Montigny le Bretonneux</p>
              <p>FRANCE</p>
            </div>
          </li>
          <li>
            <LocalPhone /> : + 33(0) 6 44 95 15 54
          </li>
        </ul>
        <div id="partenaire">
          <div>
            <img src="/images/anjajavy_blanc.png" alt="Anjajavy" />
          </div>
          <div><img src="/images/tisisi.png" alt="tist" /></div>
          <div><img src="/images/Unima-logo.svg" alt="unima" /></div>
          <div><img src="/images/anjajavy_blanc.png" alt="Anjajavy" /></div>
        </div>
      </div>
      <p>&copy; copyright 2022</p>
    </div>
  );
};

export default Footer;
