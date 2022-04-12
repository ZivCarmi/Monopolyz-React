import Dices from "./Dices";
import TurnTimer from "./TurnTimer";
import TileOptions from "./TileOptions";

const CenterAction = ({ playerTurn, handlePlayerPosition }) => {
  return (
    <div className="center-action">
      {playerTurn.isRolled ? <TurnTimer /> : null}
      {!playerTurn.isRolled ? (
        <Dices
          playerTurn={playerTurn}
          handlePlayerPosition={handlePlayerPosition}
        />
      ) : (
        <TileOptions playerTurn={playerTurn} />
      )}
    </div>
  );
};

export default CenterAction;
