import React from "react";
import Gits from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Gits} alt="GITS" />
        </div>
        <div className="content">
            <h2 >Group of IT Students</h2>
        </div>
      </div>
    </>
  );
};

export default NavBar;
