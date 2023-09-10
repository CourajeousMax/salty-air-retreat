import React from "react";
import variables from "../../styles/variables.module.scss"
const NavBar = () => {
  return (
    <div>
      <nav className="nav" >
        <div className="nav__title-container">
        <h1 className= "nav__title page__header">Esmeralda's Salty Air Retreat</h1>
        </div>
        <ul class="nav__links">
        <a Classname="nav__link nav-one">About</a>
        <a Classname="nav__link nav-three">Events</a>
        <a Classname="nav__link nav-four">Offerings</a>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
