import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import React, { useState, useEffect } from "react";
import MoodInput from "./components/moodInput";

const App = () => {
  const [moods, setMoods] = useState([]);
  const [newMood, setNewMood] = useState(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState();
  const [isToday, setIsToday] = useState(true);

  const addMoodForToday = (mood) => {
    let tempMoods = [...moods];
    tempMoods.push({
      date: new Date(currentDate.valueOf()),
      mood: mood,
    });
    setMoods(tempMoods);
    setNewMood(undefined);
  };

  const checkDateIsToday = (date) => {
    let today = new Date().toDateString();
    if (date.toDateString() === today) setIsToday(true);
    else setIsToday(false);
  };

  const changeDate = (modifier) => {
    let tempDate = new Date(currentDate.valueOf());
    tempDate.setDate(tempDate.getDate() + modifier);
    setCurrentDate(tempDate);
  };

  useEffect(() => {
    if (!currentDate) {
      let newDate = new Date();
      newDate.setHours(0, 0, 0, 0);
      setCurrentDate(newDate);
    } else {
      let index = moods.findIndex(
        (m) => m.date.toDateString() === currentDate.toDateString()
      );
      setCurrentIndex(index);
      checkDateIsToday(currentDate);
    }
  }, [currentDate, moods]);

  return (
    <div className="container mx-auto p-3">
      <MoodInput
        addMood={addMoodForToday}
        date={currentDate}
        mood={currentIndex !== -1 ? moods[currentIndex]?.mood : undefined}
        newMood={newMood}
        setNewMood={setNewMood}
        isToday={isToday}
        changeDate={changeDate}
      />
    </div>
  );
};

export default App;
