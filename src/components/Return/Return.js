import React from "react";
import ReactDatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

const Return = () => {
  const { startDate, endDate, setEndDate, radio } = useAuth();
  return (
    <div>
      <h5 className="sec-name ms-3">Return</h5>
      {radio === "Round trip" ? (
        <ReactDatePicker
          className="mx-auto mt-4 mb-4 w-50"
          placeholderText="Select Date"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      ) : (
        <ReactDatePicker
          className="mx-auto mt-4 mb-4 w-50"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          disabled
        />
      )}
    </div>
  );
};

export default Return;
