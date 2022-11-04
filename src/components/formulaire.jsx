import React from "react";
import Axios from "axios";
import { TextField, Button } from "@mui/material";
import { PersonAddAlt1Rounded } from "@mui/icons-material";

const Formulaire = () => {
  function ajout(e) {
    e.preventDefault();
    const formulaire = document.getElementById("addPerson");
    const nom = formulaire.nom.value;
    const prenom = formulaire.prenom.value;
    const datenais = formulaire.datenais.value;
    const adresse = formulaire.adresse.value;
    Axios({
      method: "POST",
      url: "http://localhost:4000/ajout",
      data: {
        name: nom,
        firstname: prenom,
        birthday: datenais,
        address: adresse,
      },
    })
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((erreur) => {
        console.log(erreur);
      });
  }
  return (
    <div className="ajout">
      <form
        id="addPerson"
        onSubmit={ajout}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <TextField type="text" name="nom" label="Nom:" required />
        <TextField type="text" name="prenom" label="Prénom:" required />
        <TextField type="date" name="datenais" required />
        <TextField type="text" name="adresse" label="Adresse:" required />
        <Button type="submit" startIcon={<PersonAddAlt1Rounded />}>Sign up</Button>
      </form>
    </div>
  );
};

export default Formulaire;
