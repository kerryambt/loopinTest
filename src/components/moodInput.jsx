import React from "react";
import DateSelector from "./common/dateSelector";
import DayOfWeekText from "./common/dayOfWeekText";
import HowAreYouText from "./common/howAreYouText";
import MoodButton from "./common/moodButton";
import MoodIcon from "./common/moodIcon";
import SubmitButton from "./common/submitButton";
import EditButton from "./common/editButton";

const MoodInput = (props) => {
  const {
    date,
    mood,
    addMood,
    removeMood,
    isToday,
    changeDate,
    newMood,
    setNewMood,
  } = props;

  const getMoodColour = (mood) => {
    if (mood === "happy") return "success";
    else if (mood === "neutral") return "warning";
    else if (mood === "sad") return "danger";
    else return "white";
  };

  return (
    <div
      className={`row m-0 p-3 border position-relative rounded bg-${getMoodColour(
        mood
      )} text-${mood ? "white" : "black"}`}
    >
      <div className="col-12 m-0 p-0 text-end">
        {date ? (
          <>
            <DayOfWeekText date={date} isToday={isToday} />
            <DateSelector
              date={date}
              isToday={isToday}
              colour={mood ? "light" : "dark"}
              changeDate={changeDate}
            />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="col-12 m-0 pb-2 pt-4 px-0">
        <HowAreYouText mood={mood} isToday={isToday} />
        <MoodIcon mood={mood} />
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
            <SubmitButton
              disabled={!newMood}
              onClick={() => addMood(newMood)}
              label={newMood ? "Submit your mood" : "Please select your mood"}
            />
          </div>
        </>
      ) : (
        <div className="col-12 col-lg-4 m-0 p-0">
          <EditButton removeMood={removeMood} />
        </div>
      )}
    </div>
  );
};

export default MoodInput;
