import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import MoodInput from "./components/moodInput";

function App() {
  const [moods, setMoods] = useState([]);
  const [date, setDate] = useState();

  const addMoodForToday = (mood) => {
    let tempMoods = [...moods];
    //if contains for current date check
    tempMoods.push({
      date: date,
      mood: mood,
    });
    setMoods(tempMoods);
  };

  useEffect(() => {
    if (!date) {
      let newDate = new Date();
      newDate.setHours(0, 0, 0, 0);
      setDate(newDate);

      setMoods([
        {
          date: newDate,
          mood: undefined,
        },
      ]);
    }
  }, []);

  return (
    <div className="container mx-auto p-3">
      <MoodInput
        addMood={addMoodForToday}
        date={date}
        mood={moods[moods.length - 1]?.mood}
      />
    </div>
  );
}

export default App;
