import React, { useEffect, useContext, useState } from "react";
import "../styles/projet.scss";
import { ActContext } from "../App";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/leaflet.css";
import { CircularProgress } from "@mui/material";
import Counter from "./Outils/counter";
import Svg from "./Outils/svg";
import L from "leaflet";
import Showpopup from "./Outils/popup";

const Project = () => {
  const { t, width } = useContext(ActContext);
  const [surface, setSurface] = useState(0);
  const [people, setPeople] = useState(0);
  const [espece, setEspece] = useState(0);
  const [dialog, setDialog] = useState();
  const iconRed = L.icon({
    iconUrl: "/marker-icon-red.png",
    shadowUrl: "/marker-shadow.png",
  });
  const iconBlue = L.icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
  });
  const marker = [
    {
      place: "Mahajamba",
      blue: true,
      coord: [-16.043375445756148, 47.195762431856124],
      link: "/images/mahajamba.webp",
      out: "https://hoteletlodge.fr/destinations/baie-de-mahajamba-a-madagascar/",
      descri: [],
      footer: "Blue Carbon",
    },
    {
      place: "Majunga",
      blue: true,
      coord: [-15.692491400504895, 46.33542191634002],
      link: "/images/majunga.jpg",
      out: "https://www.fao.org/3/x6810f/X6810F02.htm",
      descri: [],
      footer: "Blue Carbon",
    },
    {
      place: "Anjajavy",
      blue: false,
      coord: [-15.000489126982785, 47.23122566700477],
      link: "/images/Anjajavy-Faune.jpg",
      out: "https://www.anjajavy.com",
      descri: [
        "10 000 ha",
        t("anjajavy.0"),
        t("anjajavy.1"),
        t("anjajavy.2"),
        t("anjajavy.3"),
      ],
      footer: "WWF - Relais & Châteaux - Duke University",
    },
    {
      place: "Besalampy",
      blue: true,
      coord: [-16.745083744940697, 44.48627571878093],
      link: "/images/besalampy.webp",
      out: "https://fr.madayp.com/category/Plantations_sucri%C3%A8res/city:Besalampy",
      descri: [
        "1 300 ha",
        t("besalampy.0"),
        t("besalampy.1"),
      ],
      footer: "Blue Carbon ",
    },
    {
      place: "Tsiroanomandidy",
      blue: false,
      coord: [-18.767791195518857, 46.05082483693911],
      link: "/images/Tsiroanomandidy.jpeg",
      out: "https://fr.madayp.com/category/Plantations_sucri%C3%A8res/city:Tsiroanomandidy",
      descri: ["20 000 ha ", t("tsiroanomandidy.0")],
      footer: "Teraka",
    },
  ];
  useEffect(() => {
    document.title = "iTeraka | project";
    window.scrollTo({ top: 0, left: 0 });
    var initialS = 0;
    var initialP = 0;
    var initialE = 0;
    const intervalSurface = setInterval(() => {
      initialS = initialS + 50;
      initialP = initialP + 13;
      initialE = initialE + 1;
      setSurface(initialS < 31300 ? initialS : 31300);
      setPeople(initialP < 8500 ? initialP : 8500);
      setEspece(initialE < 34 ? initialE : 34);
      if (initialS > 31300 && initialP > 8500 && initialE > 34) {
        clearInterval(intervalSurface);
      }
    }, 1);
  }, []);
  return (
    <>
      <div id="project">
        <div>
          <Counter state={surface} nbr={313} texte={"ha"} font={50} />
          <Counter state={people} nbr={85} texte={t("beneficiaries")} font={30} />
          <Counter state={espece} nbr={0.34} texte={t("species")} font={40} />
          <div>
            <CircularProgress
              variant="determinate"
              value={people / 85}
              sx={{
                width: "100%",
                position: "absolute",
                top: -50,
                left: 0,
                color: "#dfdbdb",
              }}
              size={200}
            />
            <p>x Million</p>
            <p>{t("arbre")}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          transform: "translateY(10px)",
        }}
      >
        <Svg top={true} />
      </div>
      <div id="carte">
        <div id="map">
          <MapContainer
            center={[-17.031160199938037, 45.96233208115261]}
            zoom={7}
            doubleClickZoom={false}
            maxZoom={17}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            {marker.map((i) => (
              <Marker
                position={i.coord}
                key={i.place}
                icon={i.blue ? iconBlue : iconRed}
                eventHandlers={{
                  dblclick() {
                    if (i.descri) {
                      setDialog(
                        <Showpopup item={i} hide={setDialog} w={width} />
                      );
                    }
                  },
                }}
              >
                <Popup>{i.place}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div id="legende">
          <h3>{t("howtouse")}</h3>
          <div>
            <img src="/marker-icon.png" alt="marker" />
            <p>Blue Carbon</p>
          </div>
          <div>
            <img src="/marker-icon-red.png" alt="marker" />
            <p>{t("legende.0")}</p>
          </div>
          <div>
            <img
              src="/touch.png"
              alt="marker"
              style={{ transform: "scale(1.5)" }}
            />
            <p>{t("legende.1")}</p>
          </div>
          <div>
            <img
              src="/press.png"
              alt="marker"
              style={{ transform: "scale(1.5)" }}
            />
            <p>{t("legende.2")}</p>
          </div>
        </div>
      </div>
      {dialog}
    </>
  );
};

export default Project;
