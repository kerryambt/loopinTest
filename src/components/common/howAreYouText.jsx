import React, { useState, useEffect } from "react";

const HowAreYouText = (props) => {
  const [subText, setSubText] = useState();

  const { mood, isToday } = props;

  useEffect(() => {
    if (mood === "happy") setSubText("That's awesome!");
    else if (mood === "neutral") setSubText("Sorry to hear that.");
    else if (mood === "sad") setSubText("We're here to help!");
  }, [mood]);

  return (
    <>
      <h3>
        {mood ? (
          <>
            {`Your mood ${isToday ? "is" : "was"} ${
              mood === "neutral" ? "okay" : mood
            }`}
          </>
        ) : isToday ? (
          "How are you feeling today?"
        ) : (
          "How did you feel on this day?"
        )}
      </h3>
      {mood ? subText : ""}
    </>
  );
};

export default HowAreYouText;
