import React from "react";
import useAuth from "../../hooks/useAuth";
const To = () => {
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
      <h5 className="to">To</h5>
      <input
        type="text"
        className="form-control mx-auto mt-4 mb-4 w-50"
        id="exampleInputName"
        name="To"
        placeholder="Select departure"
        onChange={handleChange}
      />
    </>
  );
};

export default To;
