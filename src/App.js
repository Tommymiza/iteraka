import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { useState, useEffect, createContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import i18n  from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { en_lang } from "./components/localize/en";
import { fr_lang } from "./components/localize/fr";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en_lang },
    fr: { translation: fr_lang },
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export const ActContext = createContext();
function App() {
  const { t } = useTranslation()
  const [connected, setConnected] = useState(true);
  const [user, setUser] = useState({ name: "Tommy" });
  const [width, setWidth] = useState(document.body.offsetWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.body.offsetWidth);
    });
  }, []);
  return (
    <ActContext.Provider
      value={{ t, connected, user, width, setConnected, setUser }}
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
