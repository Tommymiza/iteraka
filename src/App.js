import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import React, { useState, useEffect, createContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Test from "./components/Test"
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { en_lang } from "./components/localize/en";
import { fr_lang } from "./components/localize/fr";

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
  const [width, setWidth] = useState(document.body.offsetWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.body.offsetWidth);
    });
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"));
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250 && document.getElementById("navbar")) {
        document.getElementById("navbar").style.transform =
          "translateY(-200px)";
      } else {
        document.getElementById("navbar").style.transform = "translateY(0)";
      }
    });
  }, []);
  return (
    <ActContext.Provider value={{ t, width }}>
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
            <Route path="/*" element={<Test />}></Route>
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </ActContext.Provider>
  );
}

export default App;
