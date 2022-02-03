import React from "react";
import useAuth from "../../../hooks/useAuth";

const PAndT = () => {
  const { select, setSelect } = useAuth();

  return (
    <div>
      <h5 className="pt">Passengers/travel class</h5>
      <select
        className="mx-auto mt-4 mb-4 w-50"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option>Economy</option>
        <option>Premium</option>
        <option>Upper Class</option>
      </select>
    </div>
  );
};

export default PAndT;
