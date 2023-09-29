import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import AppointmentForm from '@/Components/AppointmentForm/AppointmentForm';
import Image from 'next/image';
import Stars from "../../public/stars.jpg";
import Sunrise from "../../public/sunrise.jpg";
import Plants from "../../public/plants.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { styled } from "@mui/system";
//implement caalendar here 
const events = () => {
    const CustomMuiPickersLayoutRoot = styled("div")({
      display: "grid",
      gridAutoColumns: "max-content auto max-content",
      gridAutoRows: "max-content auto max-content",
      overflow: "hidden",
      minWidth: "320px",
      backgroundColor: "#fff",
      justifyContent: "start", 
      margin: "48px 90px", 
    });
    return (
      <div>
        <NavBar />
        <h1>Discovering Inner Peace Here</h1>
        <section className="info">
          <div className="info__container">
            <div className="info__item">
              <Image src={Stars} className="info__mobile" width={375} height={500} />
              <p className="info__text">Classes & Events</p>
              <p className="info__subtext">
                There are a variety of classes and events to attend. From Reiki Circles, Mala Making and Chanting, Chime Classes to Guided Meditations
                and celebratory events such as the Bodhi Festival. Learn how to empower your energy and/or restore your chakras and energy.
              </p>
            </div>
            <div className="info__item">
              <Image src={Sunrise} className="info__mobile" width={400} height={500} />
              <p className="info__text">Guidance & Mentorship</p>
              <p className="info__subtext">
                Walk your sacred path and find solace in the assurance that you are not alone in your quest for inner peace and enlightment. In the
                embrace of mentorship, embark on a transformative journey, nurture your spirits and connectwith the divine presence that resides both
                within you and in the universe that surrounds us.
              </p>
            </div>
            <div className="info__item">
              <Image src={Plants} className="info__mobile" width={400} height={500} />
              <p className="info__text">Start your spriritual journey today</p>
              <p className="info__subtext">
                Your spiritual journey begins with a simple commitment—to seek, to learn, to grow. It is a quest to understand the essence of your
                existence, to find meaning in life's mysteries, and to uncover the divine spark within you. As you take those initial steps, remember
                that this path is uniquely yours, shaped by your experiences, beliefs, and aspirations.
              </p>
            </div>
          </div>
        </section>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="signup">
            <CustomMuiPickersLayoutRoot>
              <StaticDatePicker orientation="portrait" />
            </CustomMuiPickersLayoutRoot>
            <form className="signup__form">
              <h2 className="signup__page-header">Book an appointment today!</h2>
              <div className="signup__container">
                <AppointmentForm label="Name:" name="Name" type="text" />
                <AppointmentForm label="Email:" name="email" type="email" />
                <AppointmentForm label="Message:" name="Message" type="text" />
                <button className="signup__form-button">
                  <p className="signup__form-button--text">Book</p>
                </button>
              </div>
            </form>
          </div>
        </LocalizationProvider>
      </div>
    );
};

export default events;