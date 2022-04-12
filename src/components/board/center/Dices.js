import React, { useState, useRef } from "react";
import dices from "../../../images/dices.png";
import dice1 from "../../../images/dice1.jpg";
import dice2 from "../../../images/dice2.jpg";
import dice3 from "../../../images/dice3.jpg";
import dice4 from "../../../images/dice4.jpg";
import dice5 from "../../../images/dice5.jpg";
import dice6 from "../../../images/dice6.jpg";
import DicesTimer from "./DicesTimer";

const dicesImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const Dices = ({ playerTurn, handlePlayerPosition }) => {
  const [playerDices, setPlayerDices] = useState({});
  const [isPlayerRolled, setIsPlayerRolled] = useState(false);
  const rollDicesButton = useRef();

  const rollDices = (event) => {
    const randomDices = [
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
    ];

    const dices = {
      dice1: {
        value: randomDices[0],
        image: dicesImages[randomDices[0]],
      },
      dice2: {
        value: randomDices[1],
        image: dicesImages[randomDices[1]],
      },
    };

    if (event.target.getAttribute("id") === "roll-btn") {
      setIsPlayerRolled(true);
      setPlayerDices(dices);

      // delay a bit after rolling dices
      setTimeout(() => {
        playerTurn.isRolled = true;
        handlePlayerPosition(dices);
      }, 400);
    }

    return dices;
  };

  const autoRoll = () => {
    if (rollDicesButton.current !== null) rollDicesButton.current.click();
  };

  return (
    <div type="button" className="dices">
      <h2 className="username-turn">{playerTurn.username}'s turn</h2>
      <div className="dices-action">
        {isPlayerRolled ? (
          Object.keys(playerDices).map((dice, key) => {
            return (
              <img
                className="rolled-dices"
                src={playerDices[dice].image}
                alt={playerDices[dice].value}
                key={key}
              />
            );
          })
        ) : (
          <button
            type="button"
            className="roll-btn"
            id="roll-btn"
            onClick={rollDices}
            ref={rollDicesButton}
          >
            Roll
            <img src={dices} alt="Roll dices" />
          </button>
        )}
      </div>
      {!isPlayerRolled ? (
        <DicesTimer setIsPlayerRolled={setIsPlayerRolled} autoRoll={autoRoll} />
      ) : null}
    </div>
  );
};

export default Dices;
