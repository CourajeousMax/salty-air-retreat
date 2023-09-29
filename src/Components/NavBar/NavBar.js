import React from "react";
import Link from "next/link";
import Image from "next/image";
import variables from "../../styles/variables.module.scss";
const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <Link href="/">
          <div className="nav__title-container">
            <Image src="/esar-logo.jpg" width={150} height={100} />
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
          {/* 
          <a Classname="nav__link nav-four">Offerings</a> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
