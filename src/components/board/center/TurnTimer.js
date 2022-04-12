import { useEffect, useState } from "react";

const secondsToTurn = 2;

const TurnTimer = () => {
  const [turnTime, setTurnTime] = useState(secondsToTurn);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      // we auto play here
    }
  }, [autoPlay]);

  useEffect(() => {
    const timerInterval =
      turnTime > 0 && setInterval(() => setTurnTime(turnTime - 1), 1000);
    return () => {
      clearInterval(timerInterval);

      // if turnTime is 0, auto play player turn
      if (turnTime === 1) {
        setAutoPlay(true);
      }
    };
  }, [turnTime]);

  return <div className="turn-timer">{turnTime}</div>;
};

export default TurnTimer;
