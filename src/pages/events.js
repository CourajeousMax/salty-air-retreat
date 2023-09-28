import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import AppointmentForm from '@/Components/AppointmentForm/AppointmentForm';
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="signup">
          <CustomMuiPickersLayoutRoot>
            <StaticDatePicker orientation="portrait" />
          </CustomMuiPickersLayoutRoot>
          <form className="signup__form" >
            <h2 className="signup__page-header">Book an appointment today!</h2>
            <div className="signup__container">
          <AppointmentForm label="Username:" name="username" type="text" />
          <AppointmentForm label="Email:" name="email" type="email" />
          <AppointmentForm label="Password:" name="password" type="password" />
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