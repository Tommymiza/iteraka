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
          document.body.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <KeyboardArrowUpRounded />
      </IconButton>
      <div>
        <h3>ITERAKA</h3>
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
      </div>
      <div>
        <h3>TERAKA MADAGASCAR</h3>
        <ul>
          <li>
            <HomeRounded />
            <p>: </p>
            <div>
              <p>212 route Circulaire Ambanidia</p>
              <p>Antananarivo 101</p>
              <p>MADAGASCAR</p>
            </div>
          </li>
          <li>
            <LocalPhone />
            <p>: </p>
            <div>
              <p>+261 (0) 32 15 951 92</p>
              <p>+261 (0) 34 88 14 236</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
