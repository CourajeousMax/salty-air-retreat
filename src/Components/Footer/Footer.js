import React from "react";
import { Instagram, Facebook, YouTube, EmailRounded, Phone } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container ">
        <div className="footer__card">
          <section className="footer__label">
            <h2 className="footer__title" style={{ color: "white" }}>
              Stay in Touch
            </h2>
            <a className="footer__icon" href="https://www.instagram.com/esmeraldassaltyairretreat/?hl=en" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ fontSize: "36px" }} />
            </a>
            <a className="footer__icon" href="https://www.facebook.com/profile.php?id=100067194408450" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ fontSize: "36px" }} />
            </a>
            <a className="footer__icon" href="https://www.youtube.com/@esmeraldasearthwindandfire4390" target="_blank" rel="noopener noreferrer">
              <YouTube style={{ fontSize: "36px" }} />
            </a>
          </section>
        </div>
        <div className="footer__card">
          <section className="footer__label">
            <h2 style={{ color: "white" }}>Contact Us</h2>
            <p style={{ color: "white" }}>
              <strong>
                <EmailRounded />
                Email:
              </strong>
              <a className="footer__email" href="mailto: esmeraldassaltyairretreat@gmail.com">
                esmeraldassaltyairretreat@gmail.com{" "}
              </a>
            </p>
            <p style={{ color: "white" }}>
              <strong>
                <Phone />
                Phone:&nbsp;
              </strong>
              (305)-562-0090
            </p>
            <address style={{ color: "white" }}>12307 SW 224th St, Miami, FL 33170</address>
          </section>
        </div>
      </div>
      <div className="footer__label">
        <p style={{ color: "white" }} className="footer__address">
          CopyRight &copy; 2023 Esmeraldas Earth Wind And Fire Boutique LLC - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
