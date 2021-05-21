import React, { useState, useEffect } from "react";

const MoodIcon = (props) => {
  const [iconText, setIconText] = useState();

  const { mood } = props;

  useEffect(() => {
    if (mood === "happy") setIconText("grin-beam");
    else if (mood === "neutral") setIconText("meh");
    else if (mood === "sad") setIconText("sad-cry");
  }, [mood]);

  if (!mood) return null;

  return <i className={`bounceIcon position-absolute fas fa-${iconText}`}></i>;
};

export default MoodIcon;
