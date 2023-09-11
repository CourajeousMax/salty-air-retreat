import React from "react";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <main>
        <section className="info">
          <div className="info__container">
            <div className="info__text-container">
              <p className="info__text-one info__mobile">Classes & Events</p>
            </div>
          </div>
          <div className="info__container">
            <div className="info__text-container">
              <p className="info__text-two info__mobile">Guidance & Mentorship</p>
            </div>
          </div>
          <div className="info__container">
            <div className="info__text-container">
              <p className="info__text-three info__mobile">Start your spiritual journey</p>
            </div>
          </div>
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
            </div>
            <div className="benefits__image-container">
              <Image className="benefits__image" src="/cave_class.jpg" width={129} height={77} />
              <p>
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
              <Image className="cauley__image--one" src="/cauley-square.jpg" width={200} height={150} />
              <Image className="cauley__image--two" src="/salty_retreat_house.jpg" width={200} height={150} />
              <Image className="cauley__image--three" src="/interior-cave.jpg" width={200} height={150} />
              <Image className="cauley__image--three" src="/retreat_cave.jpg" width={200} height={150} />
            </section>
          </section>
          <section className="instructor">
            <div className="instructor__title-container">
              <h2 className="instructor__title">Meet MJ </h2>
            </div>
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
                  <li>Clairsentience</li>
                  <li>Clairvoyance</li>
                  <li>Clairaudience</li>
                  <li>Claircognizance</li>
                  <li>Clairalience</li>
                  <li>Clairgustance</li>
                </ul>
                <p className="instructor__text">
                  Home, Office, and Vehicle Energy vehicle removal, Cleanser and Protection Gridding (entities, spirits, ghosts, energes, implant and
                  portals)
                </p>
                <p className="instructor__text">Personal Manifestations and Home/Business Gridder, Candle Imagery Reader, Energy Orb Reader</p>
                <p className="instructor__text">Energist(Capable of holding up to 100 people energy for ceremonies)</p>
                <ul className="instructor__list">
                  <li>Aura Reader and Teacher</li>
                  <li>Reiki Master Therapist of Light Therapy XII</li>
                  <li>Spiritual Interpretation Reader</li>
                  <li>Pendulum Practitioner</li>
                  <li>Intuitive Practitioner</li>
                  <li>Spiritual Surgery</li>
                  <li>Energetics System Practitioner</li>
                  <li>Ionic Foot Detox</li>
                  <li>Infrared Detox</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="events">
            <div>
              <div>
                <h3>Events</h3>
                <h2> Join our spiritual community</h2>
                <p>See what we're up to</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Main;
