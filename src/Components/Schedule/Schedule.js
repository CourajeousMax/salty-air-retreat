import React, { useState, useEffect } from "react";
import { getScheduleData, updateScheduleData } from "../../Components/ScheduleManager/ScheduleManager";

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchScheduleData = async () => {
      const data = await getScheduleData();
      setScheduleData(data);
    };
    fetchScheduleData();
  }, []);

  const handleSave = async (updatedData) => {
    const result = await updateScheduleData(updatedData);
    if (result.message === "Schedule data updated successfully") {
      // Data successfully updated
    } else {
      // Handle errors
    }
  };

  return (
    <>
      <div className="schedule">
        <h1 className="schedule__title">Schedule </h1>
        <div className="schedule__table">
          <table className="schedule__content">
            <thead className="schedule__table-header">
              <tr>
                <th className="schedule__table-header--th">Date</th>
                <th className="schedule__table-header--th">Event</th>
                <th className="schedule__table-header--th">Time</th>
                <th className="schedule__table-header--th">Price</th>
                <th className="schedule__table-header--th">Instructor</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr key={index}>
                  <td className="schedule__content-td">{item.Date}</td>
                  <td className="schedule__content-td">{item.event}</td>
                  <td className="schedule__content-td">{item.time}</td>
                  <td className="schedule__content-td">{item.price}</td>
                  <td className="schedule__content-td">{item.instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Schedule;
