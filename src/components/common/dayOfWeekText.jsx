import React, { useState, useEffect } from "react";

const DayOfWeekText = (props) => {
  const [currentDay, setCurrentDay] = useState();

  const { isToday, date } = props;

  useEffect(() => {
    const options = { weekday: "long" };
    setCurrentDay(new Intl.DateTimeFormat("en-US", options).format(date));
  }, [date]);

  return <h2 data-testid="dayOfWeekText">{isToday ? "Today" : currentDay}</h2>;
};

export default DayOfWeekText;
