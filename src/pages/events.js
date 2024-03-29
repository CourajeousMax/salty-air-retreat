import React from "react";
import Header from "@/Components/Header/Header";
import AppointmentForm from "@/Components/AppointmentForm/AppointmentForm";
import Schedule from "@/Components/Schedule/Schedule";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
import Stars from "../../public/stars.jpg";
import Sunrise from "../../public/sunrise.jpg";
import Plants from "../../public/plants.jpg";
import Candle from "../../public/candle.jpg";
import Product from "../../public/salt-product.jpg";
import Shop from "../../public/salt-shop.jpg";
import Main from "../../public/salt-main.jpg";
import Private from "../../public/salt-private.jpg";

const events = () => {
  const bookingUrl = "https://squareup.com/appointments/book/8c805443-b0f7-4e3a-b3fe-40e11b7419f5/ZTP8PZRX5ME1Y/start";

  function YourComponent() {
    useEffect(() => {
      document.querySelector(".signup__form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const message = document.getElementById("Message").value;
        if (!name || !email || !phoneNumber || !message) {
          alert("Please fill in all fields.");
          return;
        }
        this.submit();
      });
    }, []);
  }

  return (
    <div>
      <Header />
      <section className="info">
      <h1 className="info__title"> Discovering Inner Peace Here</h1>
        <div className="info__container">
          <div className="info__item">
            <Image src={Stars} className="info__mobile" width={375} height={500} alt="Stars Image" />
            <h2 className="info__text">Classes & Events</h2>
            <p className="info__subtext">
              There are a variety of classes and events to attend. From Reiki Circles, Mala Making and Chanting, Chime Classes to Guided Meditations
              and celebratory events such as the Bodhi Festival. Learn how to empower your energy and/or restore your chakras and energy.
            </p>
          </div>
          <div className="info__item">
            <Image src={Sunrise} className="info__mobile" width={400} height={500} alt="Sunrise Image" />
            <h2 className="info__text">Guidance & Mentorship</h2>
            <p className="info__subtext">
              Walk your sacred path and find solace in the assurance that you are not alone in your quest for inner peace and enlightment. In the
              embrace of mentorship, embark on a transformative journey, nurture your spirits and connect with the divine presence that resides both
              within you and in the universe that surrounds us.
            </p>
          </div>
          <div className="info__item">
            <Image src={Plants} className="info__mobile" width={400} height={500} alt="Plant Image" />
            <h2 className="info__text">Start your spriritual journey today</h2>
            <p className="info__subtext">
              Your spiritual journey begins with a simple commitment—to seek, to learn, to grow. It is a quest to understand the essence of your
              existence, to find meaning in life's mysteries, and to uncover the divine spark within you. As you take those initial steps, remember
              that this path is uniquely yours, shaped by your experiences, beliefs, and aspirations.
            </p>
          </div>
        </div>
      </section>
      <Schedule />
      <p className="signup__fact">
        <strong>
          Please remember to wear sock at all times inside the cave and bring a blanket and/or comfy clothes as it can get cold! Food and drinks are
          not permitted inside the cave. Thank you!☻
        </strong>
      </p>
      <div className="booking">
        <div className="booking__container">
          <Image src={Product} className="info__shop" width={500} height={300} alt="Salt Product" />
          <Image src={Shop} className="info__shop" width={500} height={300} alt="Salt Indoor Shop" />
          <Image src={Main} className="info__shop" width={500} height={400} alt="Main Salt Cave" />
          <Image src={Private} className="info__shop" width={500} height={400} alt="Private Salt Cave" />
        </div>
        <p className="booking__text">
          Experience ultimate relaxation in our rejuvenating salt cave. Elevate your experience by exploring our exquisite range of salt products,
          meticulously crafted to promote wellness and relaxation. From invigorating salt scrubs to soothing salt lamps, each item has been
          thoughtfully selected to complement your escape into serenity. Book your appointment now and embark on a journey of tranquility and
          wellness. Your serene escape awaits!
        </p>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          <button className="booking__button">Book Now</button>
        </a>
      </div>
      <div className="signup">
        <Image
          src={Candle}
          classname="signup__image"
          width={450}
          height={500}
          style={{
            borderRadius: "25px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
          }}
          alt="Candle Image"
        />
        <div className="signup__border"></div>
        <form className="signup__form" action="https://formsubmit.co/esmeraldassaltyairretreat@gmail.com" method="POST">
          <h2 className="signup__page-header">Contact Us!</h2>
          <p className="signup__remember">
            Thank you for considering us! Feel free to contact us at{" "}
            <strong>
              <a href="tel:+13055620090" className="contact-link">
                (305)-562-0090
              </a>{" "}
            </strong>{" "}
            with any further questions or to proceed with the payment to complete your booking process. We look forward to assisting you!
          </p>
          <div className="signup__container">
            <AppointmentForm label="Name:" name="Name" type="text" id="name" />
            <AppointmentForm label="Email:" name="Email" type="email" id="email" />
            <AppointmentForm label="Phone Number:" name="Phone Number" type="tel" id="phoneNumber" />
            <AppointmentForm label="Message:" name="Message" type="text" id="Message" />
            <button className="signup__form-button">
              <p className="signup__form-button--text">Send</p>
            </button>
          </div>
        </form>
      </div>
      <div className="signup__warning">
        <p className="signup__disclaimer">
          <strong>Disclaimer:</strong> We are committed to maintaining a safe and secure environment, but we cannot guarantee the absolute prevention
          of fraudulent activities. We will never send a message asking for money or offer readings. Please exercise caution, report suspicious
          behavior, and protect your personal information.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default events;
