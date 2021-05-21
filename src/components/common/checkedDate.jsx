import React, { useState, useEffect } from "react";

const CheckedDate = (props) => {
  const [currentDay, setCurrentDay] = useState("Today");
  const [formattedDate, setFormattedDate] = useState();

  const { date } = props;

  useEffect(() => {
    const checkDate = new Date().toDateString();
    if (date.toDateString() === checkDate) setCurrentDay("Today");
    else {
      const options = { weekday: "long" };
      setCurrentDay(new Intl.DateTimeFormat("en-US", options).format(date));
    }

    setFormattedDate(
      new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(date)
    );
  }, [date]);

  return (
    <>
      <h4>{currentDay}</h4>
      {formattedDate}
    </>
  );
};

export default CheckedDate;
