import React, { useState, useEffect } from "react";

const CheckedDate = (props) => {
  const [currentDay, setCurrentDay] = useState();
  const [formattedDate, setFormattedDate] = useState();

  let { date, isToday, colour, changeDate } = props;

  useEffect(() => {
    const options = { weekday: "long" };
    setCurrentDay(new Intl.DateTimeFormat("en-US", options).format(date));
    setFormattedDate(
      new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(date)
    );
  }, [date]);

  return (
    <div>
      <h2>{isToday ? "Today" : currentDay}</h2>

      <button
        className={`btn btn-sm btn-outline-${colour} me-2`}
        onClick={() => changeDate(-1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {formattedDate}

      <button
        className={`btn btn-sm btn-outline-${colour} ms-2`}
        disabled={isToday}
        onClick={() => changeDate(1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default CheckedDate;
