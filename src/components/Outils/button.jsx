import React from "react";
import "../../styles/btn.scss"

const Btn = ({ icon, text, w, action }) => {
  return (
    <button style={{width: w}} onClick={action}>
      {icon}
      {text}
    </button>
  );
};

export default Btn;
