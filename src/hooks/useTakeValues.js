import { useState } from "react";

const useTakeValues = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [select, setSelect] = useState("Economy");
  const [radio, setRadio] = useState("Round trip");
  const [value, setValue] = useState({});
  return {
    value,
    startDate,
    endDate,
    select,
    radio,
    setValue,
    setStartDate,
    setEndDate,
    setSelect,
    setRadio,
  };
};

export default useTakeValues;
