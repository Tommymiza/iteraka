import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  ThemeProvider,
} from "@mui/material";
import Btn from "./Outils/button";
import { Login } from "@mui/icons-material";
import { theme } from "./Outils/theme";
import Axios from "axios";
import { ActContext } from "../App";
import uuid from "react-uuid";

const Inscription = ({ close }) => {
  const { login, server, t } = useContext(ActContext);
  const log = (e) => {
    e.preventDefault();
    const tempId = uuid().split("-").join("");
    Axios({
      url: server + "/ajout",
      method: "post",
      data: {
        id: tempId,
        nom: document.getElementById("log-nom").value,
        date: document.getElementById("log-datenais").value,
        adresse: document.getElementById("log-adresse").value,
        email: document.getElementById("log-email").value,
        mdp: document.getElementById("log-password").value,
      },
    })
      .then((res) => {
        login({
          id: tempId,
          nom: document.getElementById("log-nom").value,
          date: document.getElementById("log-datenais").value,
          adresse: document.getElementById("log-adresse").value,
          email: document.getElementById("log-email").value,
          mdp: document.getElementById("log-password").value,
        });
        close();
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Dialog open={true} onClose={close} maxWidth="sm">
      <DialogTitle
        variant="h5"
        sx={{ fontWeight: "bold", fontFamily: "var(--fontText)" }}
      >
        {t("signup")}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={log}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <ThemeProvider theme={theme}>
              <TextField
                label={t("name")}
                required
                inputProps={{
                  style: { fontFamily: "var(--fontText)" },
                }}
                id="log-nom"
              />
              <TextField
                required
                inputProps={{
                  style: { fontFamily: "var(--fontText)" },
                }}
                InputProps={{
                  style: {
                    width: "200px",
                  },
                }}
                type="date"
                id="log-datenais"
              />
              <TextField
                label={t("address")}
                required
                inputProps={{
                  style: { fontFamily: "var(--fontText)" },
                }}
                id="log-adresse"
              />
              <TextField
                label="Email: "
                required
                inputProps={{
                  style: { fontFamily: "var(--fontText)" },
                }}
                type="email"
                id="log-email"
              />
              <TextField
                label={t("password")}
                required
                inputProps={{
                  style: { fontFamily: "var(--fontText)" },
                }}
                type="password"
                id="log-password"
              />
            </ThemeProvider>
            <Btn icon={<Login />} text={t("signup")} w={150} type="submit" />
          </FormControl>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Inscription;
