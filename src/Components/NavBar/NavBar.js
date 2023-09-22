import React from "react";
import Link from "next/link";
import variables from "../../styles/variables.module.scss";
const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav__title-container">
          <Link href="/">
            <h1 className="nav__title page__header">Esmeralda's Salty Air Retreat</h1>
          </Link>
        </div>
        <ul class="nav__links">
          
          <a Classname="nav__link nav-one">About</a>
          <Link href="/events">
            <h2 Classname="nav__link nav-three">Events</h2>
          </Link>

          <a Classname="nav__link nav-four">Offerings</a>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
