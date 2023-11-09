import React from 'react';
const AppointmentForm = ({ label, name, type, id, options }) => {
  
  return (
    <div>
      <div>
        <div className="input__box">
          <label className="input__label">{label}</label>
          <input type={type} name={name} placeholder={label} className="input__input" required />
        </div>
       
      </div>
    </div>
  );
  
};

export default AppointmentForm;