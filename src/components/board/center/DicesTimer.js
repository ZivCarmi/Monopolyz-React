import React from "react";
import { useState, useEffect } from "react";

const secondsToRoll = 19;

const DicesTimer = ({ autoRoll }) => {
  const [dicesTime, setDicesTime] = useState(secondsToRoll);

  useEffect(() => {
    const timerInterval =
      dicesTime > 0 && setInterval(() => setDicesTime(dicesTime - 1), 1000);
    return () => {
      clearInterval(timerInterval);

      // if dicesTime is 0, roll for player
      if (dicesTime === 1) {
        autoRoll();
      }
    };
  }, [dicesTime, autoRoll]);

  return <div>{dicesTime}</div>;
};

export default DicesTimer;
