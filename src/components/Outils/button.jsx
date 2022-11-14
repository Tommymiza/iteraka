import React from "react";
import "../../styles/btn.scss"

const Btn = ({ icon, text, w, action, type }) => {
  return (
    <button style={{width: w}} onClick={action} type={type} >
      {icon}
      {text}
    </button>
  );
};

export default Btn;
