import React from "react";
import Video from 'next-video'
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer/Footer";

const Main = () => {
  const content = [
    <strong>1. Mineral Soak</strong>,
    "Mineral Soak Salt and mineral baths are a great way to relax at the end of the day while simultaneously infusing the skin and body with minerals and hydration. Through the process of dermal absorption, skin soaks up minerals from the water - often better than if the same minerals were consumed internally. Because it contains so many of the different minerals our bodies need to stay healthy, when it comes to the best things to put in your bath water, Himalayan pink salt is at the top of the list.",
    <strong>2. Soothe Away Soreness</strong>,
    "A warm bath infused with Himalayan pink salt is also great for relaxing cramped muscles. The magnesium and some other trace minerals found in H.P.S. absorb through the skin to help heal damaged muscle and other soft tissues. Minerals in H.P.S. also work to fortify bones, skin, and connective tissues that may contribute to body soreness in other ways.",
    <strong>3. Detoxification</strong>,
    "When H.P.S. is added to a bath of warm (preferably about the same as body temperature) water, it not only provides much-needed nutrients to your body. Himalayan pink salt also works as a powerful detoxifier. When dissolved in water, H.P.S. becomes an ionic solution that helps to draw the toxins out of skin and adipose tissues. This process combined with the healing mineral infusion offered by a good Himalayan pink salt soak will leave you feeling refreshed and energized. Bath Salts: Bath salts are great for soaking in. The ancient Greeks even recommended seaside health resorts in order to help cure skin diseases, and 16th-century physician and alchemist Paracelsus proclaimed that a salt bath was 'better than all the health spas arising out of nature.' Himalayan salt baths take it to a whole new level. Since Himalayan Salt is rich in minerals, soaking in a solution of bath water infused with it allows the skin to soak up these minerals including calcium, copper, iodine, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, and zinc in a process known as dermal absorption.",
    <strong>4. Benefits</strong>,
    "Bath salts, particularly Himalayan salt baths, have a long history of promoting skin health and mineral absorption. The rich mineral content, including calcium, copper, iodine, and more, can be absorbed through the skin during soaking. These baths also aid in detoxification, helping remove some of the toxins we encounter daily. To use them for detox, it's recommended to shower first, then fill the tub with slightly above body temperature water. Dissolve the salts in the tub, add essential oils if desired, and soak for 30-40 minutes. Remember to stay hydrated by drinking water during your bath.",
  ];
  const renderedListItems = content.map((text, index) => (
    <li key={index} className="explaining__list-items">
      {text}
    </li>
  ));
  return (
    <>
      <main>
        <section className="salt">
          <div className="salt__gallery-container">
            <div className="salt__gallery grid-container">
              <Image className="grid__image" src="/lamp.jpg" width={350} height={275} />
              <Image className="grid__image" src="/salt.jpg" width={375} height={250} />
              <Image className="grid__image" src="/hand-salt.jpg" width={400} height={350} />
              <Image className="grid__image" src="/lamps.jpg" width={400} height={300} />
            </div>
            <div className="salt__container">
              <div className="salt__title-container">
                <h2 className="salt__title">Soothing Salts</h2>
                <h3 className="salt__subtitle">Why salt?</h3>
              </div>
              <p className="salt__paragraph">
                {" "}
                Your skin is an excretory organ that mirrors the condition of your intestines. When you take a salt water (brine) bath, the salt
                minerals penetrate your skin in the form of ions. This stimulation will cause natural cell growth in your living cell layers.
                Bio-energetic weak points will be balanced and your body's energy flow will be activated. While anyone can benefit from a brine bath,
                it is particularly soothing for those with:
              </p>
              <ul className="salt__benefits">
                {[
                  "Various Skin Diseases",
                  "Rheumatism and joint diseases",
                  "A post-operative care regimen",
                  "Recurring infections",
                  "Severe insect bites, blisters or wounds",
                  "Skin irritations from poison oak, ivy or sumac",
                ].map((salt, index) => (
                  <li className="salt__benefits-list" key={index}>
                    {salt}
                  </li>
                ))}
              </ul>
              <p className="salt__paragraph">
                <strong>WARNING:</strong> While brine baths have a positive effect on many ailments, they are also demanding on your circulatory
                system. If you suffer from weak or poor heart circulation, always consult your doctor first.
              </p>
            </div>
          </div>
        </section>

        <div className="explaining__container">
          <h2 className="explaining__title">Soaking in Himalayan Salt: The Benefits</h2>
          <section className="explaining">
            <ol className="explaining__list">{renderedListItems}</ol>
          </section>
        </div>
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
              <Image className="benefits__image" src="/cave_class.JPG" width={129} height={77} />
              <p className="benefits__text">
                Moreover, HSL release negative ions, which promote healthier breathing by enhancing cilia activity and filtering foreign particles,
                potentially safeguarding against airborne germs. These negative ions can also boost energy levels, akin to the invigorating effects of
                spending time in natural settings rich in negative ions, counteracting the draining impact of positive ions on our bodies.{" "}
              </p>
            </div>
          </div>
        </section>
        {/* <div className="video__wrapper">
          <Video src={videoCave}/>
        </div> */}
        <div className="instructor__container">
          <Image className="instructor__image" src="/mj.JPG" width={700} height={800} />
          <article className="instructor">
            <h3 className="instructor__title">Reverend, Master Therapist of Light Therapy, Reiki, and Energist</h3>
            <h2 className="instructor__title">MJ Gonzalez</h2>
            <div className="instructor__about">
              <p className="instructor__text">
                Rev. MJ Gonzalez's spiritual journey began at the tender age of 6 when she had her first profound encounter with the Divine. It
                happened while she was standing by her beloved creek behind her childhood home, where she witnessed her initial apparition. This early
                connection with the spiritual realm bestowed upon her the gift of the Clairs, including Clairsentience, Clairvoyance, Clairaudience,
                Claircognizance, Clairalience, Clairgustance, and the capability to perform Home, Office, and Vehicle Energy Clearing, Cleansing, and
                Protection Gridding – a skill set that involves addressing entities, spirits, ghosts, energies, implants, and portals. As she matured,
                these intuitive abilities only grew stronger.
              </p>
              <p className="instructor__text">
                Additionally, Rev. MJ Gonzalez specializes in Personal Manifestations, Home and Business Grid Work, Candle Imagery Reading, and the
                interpretation of Energy Orbs. She is a gifted Energist, with the capacity to hold space for up to 100 individuals in ceremonial
                energy work. Her talents extend to Aura Reading and Teaching, Reiki Master Therapy of Light Therapy XII, Spiritual Interpretation
                Reading, Pendulum Practice, Intuitive Guidance, Spiritual Surgery, Energetics System Practice, Ionic Foot Detox, and Infrared Detox.
              </p>
              <p className="instructor__text">
                With her vast range of spiritual abilities and deep-rooted connection to the metaphysical, Rev. MJ Gonzalez offers a holistic approach
                to healing and guidance, making a significant impact in the lives of those she serves.
              </p>
            </div>
          </article>
        </div>
        <div id="story">
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
                <Image key={index} className={`cauley__image--${index + 1}`} src={src} width={325} height={250} />
              ))}
            </section>
          </section>
          <div className="cauley__hours"></div>
        </div>
        <section className="events">
          <div className="events__container">
            <h3 className="page__header">Events</h3>
            <h2 className="page__header"> Join our spiritual community</h2>
            <p className="page__header">See what we're up to</p>
            <div className="events__container-info">
              <Link className="events__button" href="/events">
                Events{" "}
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Main;
