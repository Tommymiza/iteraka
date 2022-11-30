import React, { useContext } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Close, Link } from "@mui/icons-material";
import { ActContext } from "../../App";

const Popup = ({ item, hide }) => {
  const { width } = useContext(ActContext);
  return (
    <Dialog open maxWidth="lg" fullScreen={width < 410}>
      <DialogTitle sx={{ margin: 0, padding: 0 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "calc(100% - 20px)",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            fontFamily: "SF",
            margin: 0,
          }}
        >
          <IconButton
            onClick={() => {
              window.open(item.out, "_blank");
            }}
          >
            <Link />
          </IconButton>
          <h3 style={{ margin: 0, justifySelf: "center" }}>{item.place}</h3>
          <IconButton onClick={() => hide()}>
            <Close />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent sx={{ padding: width < 410 ? "5px" : "24px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            minWidth: "300px",
          }}
        >
          <div style={{ width: "50%", borderRadius: "7px", overflow: "hidden", minWidth: "300px"}}>
            <img
              src={item.link}
              alt={item.place}
              style={{ width: "100%", height: "100%",objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: "50%",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ul>
              {item.descri.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p>{item.footer}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
