import React from "react";
import useAuth from "../../hooks/useAuth";

const VAndC = () => {
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
      <h5 className="pt">Voucher or event code</h5>
      <input
        type="text"
        className="form-control mx-auto mt-4 mb-4 w-50"
        id="exampleInputName"
        name="Voucher_or_event_code"
        placeholder="Voucher or event code"
        onChange={handleChange}
      />
    </>
  );
};

export default VAndC;
