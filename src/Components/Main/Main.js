import React from "react";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <main>
        <section className="benefits">
          <div className="benefits__subheader-container">
            <h2 className="benefits__subheader">Benefits of Himalayan Salt Lamps</h2>
          </div>
          <div className="benefits__text-container">
            <p className="benefits__text">About himalayan salt lamps</p>
            <Image className="benefits__image" src="/Himalayan-Salt-lamp.jpg" width={129} height={77} />
            <p>Himalayan Salt fact </p>
            <Image className="benefits__image" src="/salt-lamp.jpeg" width={129} height={77} />
          </div>
        </section>
        <div className="story">
          <h2 className="story__subheader mobile-subheader">Our Story</h2>
          <h3 className="story__subheader mobile-subheader-one">In the heart of Cauley Square</h3>
          <p>lorem ipsum</p>
          <section className="cauley">
            <section className="cauley__gallery">
              <Image className="cauley__image--one" src="/cauley-square.jpg" width={129} height={77} />
              <Image className="cauley__image--two" src="/salty_retreat_house.jpg" width={129} height={77} />
              <Image className="cauley__image--three" src="/interior-cave.jpg" width={129} height={77} />
            </section>
          </section>
          <section className="instructors">
            <div className="instructors__container">
              <h2>Instructors</h2>
              <p>Mel</p>
              <p>Mj</p>
              <p>Diana</p>
            </div>
          </section>
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
