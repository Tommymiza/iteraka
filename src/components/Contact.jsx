import React, { useEffect, useContext } from "react";
import "../styles/contact.scss";
import { ActContext } from "../App";
import { TextField, ThemeProvider } from "@mui/material";
import { Send } from "@mui/icons-material";
import { theme } from "./Outils/theme"

const Contact = () => {
  const { t } = useContext(ActContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "auto" });
  }, []);
  return (
    <div id="contact">
      <h3>{t("emailUs")}</h3>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t("form.0")}
            required
            sx={{
              width: "70%",
              minWidth: "400px",
              fontFamily: "var(--fontText)",
            }}
            InputLabelProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
            inputProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
          />
          <TextField
            label={t("form.1")}
            type="email"
            required
            sx={{
              width: "70%",
              minWidth: "400px",
              fontFamily: "var(--fontText)",
            }}
            InputLabelProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
            inputProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
          />
          <TextField
            label={t("form.2")}
            multiline
            maxRows={5}
            required
            sx={{
              width: "70%",
              minWidth: "400px",
            }}
            InputLabelProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
              },
            }}
            inputProps={{
              style: {
                fontSize: "17px",
                fontFamily: "var(--fontText)",
                height: "150px",
              },
            }}
          />
          <button style={{ width: 120 }} type="submit">
            {<Send />}
            {t("form.3")}
          </button>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default Contact;
