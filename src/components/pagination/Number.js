import React from "react";
import "./number.css";

const Number = ({ number, setSelectedPage, selectedPage }) => {
  return (
    <p
      className={`number ${selectedPage === number ? "active" : ""}`}
      onClick={(e) => setSelectedPage(parseInt(e.target.innerHTML))}
    >
      {number}
    </p>
  );
};

export default Number;
