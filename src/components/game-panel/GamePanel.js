import Scoreboard from "./Scoreboard";
import Card from "./Card";

const GamePanel = ({ players, isPlayerMoved, playerTurn }) => {
  return (
    <div className="game-panel">
      <Scoreboard players={players} />
      {isPlayerMoved ? <Card playerTurn={playerTurn} /> : null}
    </div>
  );
};

export default GamePanel;
