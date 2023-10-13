import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "@mui/icons-material";

const NavBar = () => {
  return (
    <div>
        <div>
          <nav className="nav">
            <Link href="/">
              <div className="nav__title-container">
                <h1 className="nav__title page__header">Esmeralda's Salty Air Retreat</h1>
              </div>
            </Link>
            <ul class="nav__links">
              <Link Classname="nav__link nav-one" href="/#story" style={{ fontSize: "18px" }}>
                About
              </Link>
              <Link Classname="nav__link nav-three" href="/events" style={{ fontSize: "18px" }}>
                Events
              </Link>
              <a className="nav__icon" href="https://www.instagram.com/esmeraldassaltyairretreat/?hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram style={{ fontSize: "40px" }} />
              </a>
              <a
                className="nav__icon"
                href="https://www.facebook.com/EsmeraldasEarthWindAndFireBoutiqueLLC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook style={{ fontSize: "40px" }} />
              </a>
            </ul>
          </nav>
        </div>
      </div>
  );
};

export default NavBar;
