import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { useState, useEffect, createContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { en_lang } from "./components/localize/en";
import { fr_lang } from "./components/localize/fr";
import Axios from "axios";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en_lang },
    fr: { translation: fr_lang },
  },
  lng: window.navigator.language,
  fallbackLng: window.navigator.language,
  interpolation: { escapeValue: false },
});

export const ActContext = createContext();
function App() {
  const { t } = useTranslation();
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState();
  const [width, setWidth] = useState(document.body.offsetWidth);
  const server = "https://iterakaserver.vercel.app"

  function login(data) {
    setUser(data);
    document.cookie =
      "accessKey=" + data.id + ";expires=Sat, 31 Dec 2022 00:00:01 GMT";
    setConnected(true);
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.body.offsetWidth);
    });
    const cookies = document.cookie.split(";");
    const accCookie = cookies[0].split("=");
    const accessKey = accCookie[1];
    Axios({
      method: "get",
      url: server + "/getuser/",
      params: {
        id: accessKey,
      },
    })
      .then((res) => {
        if (res.data.length === 0) {
          setUser();
          setConnected(false);
        } else {
          if (res.data.errno) {
            alert(res.data.sqlMessage);
            setUser();
            setConnected(false);
          } else {
            setUser(res.data[0]);
            setConnected(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ActContext.Provider
      value={{server, t, connected, user, width, setConnected, setUser, login }}
    >
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </ActContext.Provider>
  );
}

export default App;
