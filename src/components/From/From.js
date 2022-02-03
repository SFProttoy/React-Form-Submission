import React from "react";
import useAuth from "../../hooks/useAuth";
import "./From.css";
const From = () => {
  const { setValue } = useAuth();

  const handleChange = (e) => {
    setValue((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <h5 className="sec-name ms-2">From</h5>
      <input
        type="text"
        className="form-control mx-auto mt-4 mb-4 w-50"
        id="exampleInputName"
        name="From"
        placeholder="Select destination"
        onChange={handleChange}
      />
    </>
  );
};

export default From;
