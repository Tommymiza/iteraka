import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { useState, useEffect, createContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const ActContext = createContext();
function App() {
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
      value={{ connected, user, width, setConnected, setUser }}
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
