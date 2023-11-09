import React from "react";
import eventsData from "../../Data/schedule-data.json";
import "../../styles/variables.module.scss";

const AppointmentDate = () => {
  const availableTimes = ["8:15 AM", "9:30 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:15PM", "4:30PM", "5:45PM", "7:00PM"];
  const events = eventsData;
  return (
    <div>
      <div className="date">
        <label htmlFor="eventSelect">Select an Event:</label>
        <select id="eventSelect" name="Event">
          {events.map((event, index) => (
            <option key={index} value={event.event}>
              {event.event}
            </option>
          ))}
        </select>
      </div>
      <div className="time">
        <label htmlFor="timeSelect">Select a Time:</label>
        <select id="timeSelect" name="Time">
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AppointmentDate;
