import React from "react";
import { CircularProgress } from "@mui/material";

const Counter = ({state, nbr, texte, font}) => {
  return (
    <div>
      <CircularProgress
        variant="determinate"
        value={state / nbr}
        sx={{
          width: "100%",
          position: "absolute",
          top: -50,
          left: 0,
          color: "#dfdbdb",
        }}
        size={200}
      />
      <h1>{state}</h1>
      <h1 style={{fontSize: font}}>{texte}</h1>
    </div>
  );
};

export default Counter;
