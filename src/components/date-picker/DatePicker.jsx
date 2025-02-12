import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({
    hours: "08",
    minutes: "00",
  });

  const minuteOptions = ["00", "15", "30", "45"];
  const hourOptions = ["08", "09", "10", "14", "15", "18", "19", "20", "21", "22"];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    const { name, value } = event.target;
    setSelectedTime((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="date-picker-container">
      <div className="date-picker">
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecciona una fecha"
          minDate={new Date()}
        />
      </div>

      <div className="time-picker">
        <div className="time-select">
          <select
            name="hours"
            value={selectedTime.hours}
            onChange={handleTimeChange}
            className="time-select-input"
          >
            {hourOptions.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <span>:</span>
          <select
            name="minutes"
            value={selectedTime.minutes}
            onChange={handleTimeChange}
            className="time-select-input"
          >
            {minuteOptions.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default DatePickerComponent;
