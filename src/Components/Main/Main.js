import React from "react";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <main>
        <section className="info">
          <div className="info__container">
            <div className="info__text">
              <p>Classes & Events</p>
            </div>
          </div>
          <div className="info__container">
            <div className="info__text">
              <p>Guidance & Mentorship</p>
            </div>
          </div>
          <div className="info__container">
            <div className="info__text">
              <p>Start your spiritual journey</p>
            </div>
          </div>
        </section>
        <section className="benefits">
          <div className="benefits__subheader-container">
            <h2 className="benefits__subheader">Benefits of Himalayan Salt Lamps</h2>
          </div>
          <div className="benefits__text-container">
            <div className="benefits__image-container">
              <Image className="benefits__image" src="/Himalayan-Salt-lamp.jpg" width={129} height={77} />
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
          <div clssname="story__container">
            <h2 className="story__subheader mobile-subheader">Our Story</h2>
            <h3 className="story__subheader mobile-subheader-one">In the heart of Cauley Square</h3>
          </div>
          <p>
            Esmeralda Salty Air Retreat, located within Cauley Square, boasts a serene and rejuvenating salt cave experience. This unique sanctuary
            offers visitors a tranquil environment filled with therapeutic microsalt particles, known for their potential respiratory and relaxation
            benefits. The cave's soothing ambiance and natural salt-infused air create a serene haven for relaxation and wellness seekers.
          </p>
          <p>Located at:12307 SW 224th St, Miami, FL 33170 </p>
          <section className="cauley">
            <section className="cauley__gallery">
              <Image className="cauley__image--one" src="/cauley-square.jpg" width={129} height={77} />
              <Image className="cauley__image--two" src="/salty_retreat_house.jpg" width={129} height={77} />
              <Image className="cauley__image--three" src="/interior-cave.jpg" width={129} height={77} />
              <Image className="cauley__image--three" src="/retreat_cave.jpg" width={129} height={77} />
            </section>
          </section>
          <section className="instructors">
            <div className="instructors__container">
              <h2>Meet MJ </h2>
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
