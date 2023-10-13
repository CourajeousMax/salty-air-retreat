import React from "react";
import NavBar from "../NavBar/NavBar";


const Header = () => {
  return (
    <>
      <div className="hero">
    <NavBar />
        <div className="hero__container">
        <h2 className="hero__title">Salty Air Retreat</h2>
        <h1 className="hero__title ">Welcome to your spiritual home</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
