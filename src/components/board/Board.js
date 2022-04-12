import ReactDOM from "react-dom";
import { useEffect } from "react";
import Center from "./center/Center";
import Players from "./Players";

const Board = ({
  boardTiles,
  shouldStartGame,
  players,
  playerTurn,
  handlePlayerPosition,
}) => {
  useEffect(() => {
    const playersBlockSelector = document.querySelector(".players-block");

    if (shouldStartGame && !playersBlockSelector) {
      const playersChars = [];

      Object.keys(players).map((player, key) => {
        return playersChars.push(
          <Players player={players[player]} key={key} />
        );
      });

      const playersBlock = document.createElement("div");
      playersBlock.className = "players-block";

      document.getElementById(0).appendChild(playersBlock);

      ReactDOM.render(playersChars, playersBlock);
    }
  }, [shouldStartGame, players]);

  return (
    <div className="board">
      <Center
        playerTurn={playerTurn}
        handlePlayerPosition={handlePlayerPosition}
      />
      {boardTiles}
    </div>
  );
};

export default Board;
