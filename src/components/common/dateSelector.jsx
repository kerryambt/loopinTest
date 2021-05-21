import React, { useState, useEffect } from "react";

const DateSelector = (props) => {
  const [formattedDate, setFormattedDate] = useState();

  const { date, isToday, colour, changeDate } = props;

  useEffect(() => {
    setFormattedDate(
      new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(date)
    );
  }, [date]);

  return (
    <div data-testid="dateSelector">
      <button
        className={`btn btn-sm btn-outline-${colour} me-2`}
        onClick={() => changeDate(-1)}
        data-testid="buttonLeft"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {formattedDate}

      <button
        className={`btn btn-sm btn-outline-${colour} ms-2`}
        disabled={isToday}
        onClick={() => changeDate(1)}
        data-testid="buttonRight"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default DateSelector;
