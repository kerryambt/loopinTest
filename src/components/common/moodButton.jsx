import React from "react";

const MoodButton = (props) => {
  const { mood, newMood, label, setMood, getMoodColour } = props;

  return (
    <button
      className={`btn btn-${newMood !== mood ? "outline-" : ""}${getMoodColour(
        mood
      )} w-100`}
      onClick={() => setMood(mood)}
    >
      {label}
    </button>
  );
};

export default MoodButton;
