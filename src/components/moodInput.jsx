import React, { useState, useEffect } from "react";
import CheckedDate from "./common/checkedDate";
import MoodButton from "./common/moodButton";

const MoodInput = (props) => {
  const [newMood, setNewMood] = useState(undefined);

  const { date, mood, addMood } = props;

  const getMoodColour = (mood) => {
    if (mood === "happy") return "success";
    else if (mood === "neutral") return "warning";
    else if (mood === "sad") return "danger";
    else return "white";
  };

  return (
    <div
      className={`row m-0 p-3 border rounded bg-${getMoodColour(mood)} text-${
        mood ? "white" : "black"
      }`}
    >
      <div className="col-12 m-0 p-0 text-end">
        {date ? <CheckedDate date={date} /> : ""}
      </div>
      <div className="col-12 m-0 py-2 px-0">
        <h4>
          {mood
            ? `Your mood is ${mood === "neutral" ? "okay" : mood}`
            : "How are you feeling today?"}
        </h4>
      </div>
      {!mood ? (
        <>
          <div className="col-12 col-lg-4 m-0 p-0">
            <MoodButton
              mood="happy"
              label="Happy"
              setMood={setNewMood}
              getMoodColour={getMoodColour}
              newMood={newMood}
            />
          </div>
          <div className="col-12 col-lg-4 m-0 py-2 py-lg-0 px-0 px-lg-2">
            <MoodButton
              mood="neutral"
              label="Okay"
              setMood={setNewMood}
              getMoodColour={getMoodColour}
              newMood={newMood}
            />
          </div>
          <div className="col-12 col-lg-4 m-0 p-0">
            <MoodButton
              mood="sad"
              label="Sad"
              setMood={setNewMood}
              getMoodColour={getMoodColour}
              newMood={newMood}
            />
          </div>
          <div className="col-12 col-lg-4 m-0 pt-3 px-0">
            <button
              className="btn btn-secondary w-100"
              disabled={!newMood}
              onClick={() => addMood(newMood)}
            >
              {newMood ? "Submit your mood" : "Please select your current mood"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MoodInput;