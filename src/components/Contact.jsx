import React, { useEffect, useContext, useRef, useState } from "react";
import "../styles/contact.scss";
import { ActContext } from "../App";
import { TextField, ThemeProvider, Dialog, DialogTitle, IconButton, DialogContent } from "@mui/material";
import { Send, Close } from "@mui/icons-material";
import { theme } from "./Outils/theme";
import emailjs from "@emailjs/browser";
import { LoadingButton } from "@mui/lab";

const Contact = () => {
  const { t } = useContext(ActContext);
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h10iqrm",
        "template_wetucyu",
        form.current,
        "HD9xs_a5O8rm-EC-4"
      )
      .then((result) => {
        form.current.nom.value = "";
        form.current.email.value = "";
        form.current.message.value = "";
        setLoading(false);
        setDialog(t("success"));
      })
      .catch((err) => {
        setLoading(false);
        setDialog(err)
      });
  };
  useEffect(() => {
    document.title = "iTeraka | contact";
    window.scrollTo({top: 0, left: 0});
  }, []);
  return (
    <div id="contact">
      <h3>{t("emailUs")}</h3>
      <ThemeProvider theme={theme}>
        <form ref={form} onSubmit={handleSubmit}>
          <TextField
            label={t("form.0")}
            required
            sx={{
              width: "70%",
              minWidth: "300px",
              fontFamily: "var(--fontText)",
            }}
            name="nom"
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
              minWidth: "300px",
              fontFamily: "var(--fontText)",
            }}
            name="email"
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
            name="message"
            sx={{
              width: "70%",
              minWidth: "300px",
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
          <LoadingButton
            type="submit"
            sx={{
              background: "#5cb85c",
              color: "white",
              "&:hover": {
                background: "#5cb85c",
              },
            }}
            loading={loading}
            startIcon={<Send />}
          >
            {t("form.3")}
          </LoadingButton>
        </form>
      </ThemeProvider>
      <Dialog open={dialog !== ""}>
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
            <h3 style={{ margin: 0 }}>Alert:</h3>
            <IconButton onClick={() => setDialog("")}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          {dialog}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
