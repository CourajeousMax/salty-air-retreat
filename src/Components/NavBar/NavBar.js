import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "@mui/icons-material";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <Link href="/">
          <div className="nav__title-container">
            <h1 className="nav__title page__header">Esmeralda's Salty Air Retreat</h1>
          </div>
        </Link>
        <ul class="nav__links">
          <Link Classname="nav__link nav-one" href="#story">
            About
          </Link>
          <Link Classname="nav__link nav-three" href="/events">
            Events
          </Link>
          <a href="https://www.instagram.com/esmeraldassaltyairretreat/?hl=en" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/EsmeraldasEarthWindAndFireBoutiqueLLC/" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
