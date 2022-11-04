import React from "react";
import { IconButton } from "@mui/material";
import {
  KeyboardArrowUpRounded,
  HomeRounded,
  LocalPhone,
  DraftsRounded,
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
        <h3>Nos coordonnées: </h3>
        <ul>
          <li>
            <HomeRounded /> : Ambanidia, Madagascar
          </li>
          <li>
            <LocalPhone /> : +33 1 87 40 39 77
          </li>
          <li>
            <DraftsRounded /> : mathieu.rahm@teraka.org,
            cedric.de.foucault@teraka.org
          </li>
        </ul>
      </div>
      <div>
        <h3>Nos partenaires:</h3>
        <ul>
          <li>Image Partenaire 1</li>
          <li>Image Partenaire 2</li>
          <li>Image Partenaire 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
