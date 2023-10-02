import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import './Calendar.css'

function Calendar1() {
  // Array to store month string values
  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calander text
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`${value.toDateString()}`);
  };

  // Function to handle selected Year change
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue}`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue}`);
  };

  return (
    <div className="calendar-main">
      <div className="planner">
        <button><FeatherIcon icon="plus-circle" /></button>
        <p className="day"><Moment format="DD">{selectedDate}</Moment></p>
        <p  className="day-week"><Moment format="dddd">{selectedDate}</Moment></p>
        <hr/>
      </div>
      <Calendar
        className="calendar"
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
}

export default Calendar1;