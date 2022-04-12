import CenterAction from "./CenterAction.js";

const Center = ({ playerTurn, handlePlayerPosition, dicesTimerRunning }) => {
  return (
    <div className="center">
      {playerTurn !== null ? (
        <CenterAction
          playerTurn={playerTurn}
          handlePlayerPosition={handlePlayerPosition}
          dicesTimerRunning={dicesTimerRunning}
        />
      ) : null}
      <div className="logo">MONOPOLYZ</div>
    </div>
  );
};

export default Center;
