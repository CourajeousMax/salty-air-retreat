import React from 'react';
const AppointmentForm = ({ label, name, type }) => {
  return (
    <div>
      <div>
        <div className="input__box">
          <label className="input__label">{label}</label>
          <input type={type} name={name} placeholder={label} className="input__input" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;