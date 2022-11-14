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

const Connexion = ({ close }) => {
  const { login, server, t } = useContext(ActContext);
  const log = (e) => {
    e.preventDefault();
    Axios({
      url: server + "/login",
      method: "get",
      params: {
        email: document.getElementById("log-email").value,
        mdp: document.getElementById("log-password").value,
      },
    })
      .then((res) => {
        if (res.data.status) {
          alert(res.data.status);
        } else {
          login(res.data);
          close();
        }
      })
      .catch((err) => {
        alert(err)
      });
  };
  return (
    <Dialog open={true} onClose={close} maxWidth="sm">
      <DialogTitle
        variant="h5"
        sx={{ fontWeight: "bold", fontFamily: "var(--fontText)" }}
      >
        {t("login")}
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
            <Btn icon={<Login />} text={t("login")} w={100} type="submit" />
          </FormControl>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Connexion;
