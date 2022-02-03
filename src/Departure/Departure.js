import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
const Departure = () => {
  const { startDate, setStartDate } = useAuth();
  return (
    <div>
      <h5 className="sec-name ms-5">Departure</h5>
      <DatePicker
        className="mx-auto mt-4 mb-4 w-50"
        placeholderText="Select Date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        name="StartDate"
        selectsStart
        startDate={startDate}
        minDate={new Date()}
      />
    </div>
  );
};

export default Departure;
