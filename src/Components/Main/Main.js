import React from "react";
import Image from "next/image";
import Stars from "../../../public/stars.jpg";
import Sunrise from "../../../public/sunrise.jpg";
import Plants from "../../../public/plants.jpg";
const Main = () => {
  const pics = [Stars, Sunrise, Plants];
  const picNames = ["Stars", "Sunrise", "Plants"];
  
  return (
    <>
      <main>
        <section className="info">
          {["Classes & Events", "Guidance & Mentorship", "Start your spiritual journey"].map((text, index) => (
            <div className="info__container">
              <div className="info__text-container">
                <Image src={pics[index]} alt={picNames[index]} className="info__mobile" width={200} height={420} />
                <p className={`info__mobile-${index + 1} info__text`}>{text}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="benefits">
          <div className="benefits__subheader-container">
            <h2 className="benefits__subheader">Nature's healing happiness</h2>
            <h3 className="benefits__subheader-text">The benefits of Himalayan Pink Salt Lamps</h3>
          </div>
          <div className="benefits__text-container">
            <div className="benefits__image-container">
              <Image className="benefits__image" src="/Himalayan-Salt-lamp.jpg" width={250} height={77} />
              <p className="benefits__text">
                Himalayan Pink Salt Lamps (HSL) are celebrated for their natural healing properties and their ability to enhance overall well-being.
                These remarkable creations of nature offer a multitude of benefits for our lives. HSL function as air purifiers by utilizing
                hygroscopic properties to attract and trap contaminated water molecules from the environment, effectively removing cigarette smoke,
                dust, allergens, and other pollutants. As the lamp heats up from the incandescent light source, the trapped particles remain locked in
                the salt crystal. This purification process significantly reduces allergy symptoms and can even benefit individuals with asthma.
              </p>
              <Image className="benefits__image" src="/cave_class.jpg" width={129} height={77} />
              <p className="benefits__text">
                Moreover, HSL release negative ions, which promote healthier breathing by enhancing cilia activity and filtering foreign particles,
                potentially safeguarding against airborne germs. These negative ions can also boost energy levels, akin to the invigorating effects of
                spending time in natural settings rich in negative ions, counteracting the draining impact of positive ions on our bodies.{" "}
              </p>
            </div>
          </div>
        </section>
        <div className="story">
          <div className="story__container">
            <h2 className="story__subheader mobile-subheader">Our Story</h2>
            <h3 className="story__subheader mobile-subheader-one">In the heart of Cauley Square</h3>
          </div>
          <p className="story__text">
            Esmeralda Salty Air Retreat, located within Cauley Square, boasts a serene and rejuvenating salt cave experience. This unique sanctuary
            offers visitors a tranquil environment filled with therapeutic microsalt particles, known for their potential respiratory and relaxation
            benefits. The cave's soothing ambiance and natural salt-infused air create a serene haven for relaxation and wellness seekers.
          </p>
          <p className="story__address">Located at:12307 SW 224th St, Miami, FL 33170 </p>
          <section className="cauley">
            <section className="cauley__gallery">
              {["/cauley-square.jpg", "/salty_retreat_house.jpg", "/interior-cave.jpg", "/retreat_cave.jpg"].map((src, index) => (
                <Image key={index} className={`cauley__image--${index + 1}`} src={src} width={200} height={150} />
              ))}
            </section>
          </section>
          <article className="instructor">
            <h3 className="instructor__title">Your reiki master teacher and guide</h3>
            <h2 className="instructor__title">MJ Gonzalez</h2>
            <div className="instructor__container">
              <Image className="instructor__image" src="/mj.JPG" width={200} height={300} />
              <div className="instructor__about">
                <p className="instructor__text">
                  {" "}
                  Rev. MJ Gonzalez started growing into her spirituality by the age of 6 when she sawher first apparition standing behind a friend at
                  her favored Creek she would visit daily behind her childhood home. She was given, by the Divine, all the Clairs at a very young age.
                  As she grew, the Clairs grew stronger.{" "}
                </p>
                <p className="instructore__text">Her spiritual modalities are, but not limted to:</p>
                <ul className="instructor__list">
                  {" "}
                  <ul className="instructor__list">
                    {["Clairsentience", "Clairvoyance", "Clairaudience", "Claircognizance", "Clairalience", "Clairgustance"].map((clair, index) => (
                      <li key={index}>{clair}</li>
                    ))}
                  </ul>
                </ul>
                <p className="instructor__text">
                  Home, Office, and Vehicle Energy vehicle removal, Cleanser and Protection Gridding (entities, spirits, ghosts, energes, implant and
                  portals)
                </p>
                <p className="instructor__text">Personal Manifestations and Home/Business Gridder, Candle Imagery Reader, Energy Orb Reader</p>
                <p className="instructor__text">Energist(Capable of holding up to 100 people energy for ceremonies)</p>
                <ul className="instructor__list">
                  {[
                    "Aura Reader and Teacher",
                    "Reiki Master Therapist of Light Therapy XII",
                    "Spiritual Interpretation Reader",
                    "Pendulum Practitioner",
                    "Intuitive Practitioner",
                    "Spiritual Surgery",
                    "Energetics System Practitioner",
                    "Ionic Foot Detox",
                    "Infrared Detox",
                  ].map((modality, index) => (
                    <li key={index}>{modality}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </main>
      <section className="events">
        <div>
          <div className="events__container">
            <h3>Events</h3>
            <h2> Join our spiritual community</h2>
            <p>See what we're up to</p>
            <div className="events__container-info">
              <button className="events__button">Events </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
