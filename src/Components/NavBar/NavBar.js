import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "@mui/icons-material";

const NavBar = () => {
  const bookingUrl = "https://squareup.com/appointments/book/8c805443-b0f7-4e3a-b3fe-40e11b7419f5/ZTP8PZRX5ME1Y/start";
  return (
    <div>
      <div>
        <nav className="nav">
          <Link className="nav__title-link" href="/">
            <div className="nav__title-container">
              <h1 className="nav__title page__header">Esmeralda's Salty Air Retreat</h1>
            </div>
          </Link>
          <ul className="nav__links">
            <a className="nav__link active" href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
            <Link className="nav__link nav-one" href="/#story" style={{ fontSize: "18px" }}>
              About
            </Link>
            <Link className="nav__link nav-three" href="/events" style={{ fontSize: "18px" }}>
              Events
            </Link>
            <a className="nav__link icon" href="https://www.instagram.com/esmeraldassaltyairretreat/?hl=en" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ fontSize: "30px", height: "30px" }} />
            </a>
            <a className="nav__link icon" href="https://www.facebook.com/profile.php?id=100067194408450" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ fontSize: "30px", height: "30px" }} />
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
