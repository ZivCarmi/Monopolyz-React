const PlayButton = ({ startGame }) => {
  return (
    <div className="or-start-game">
      <div className="or">OR</div>
      <button type="button" className="start-game-btn" onClick={startGame}>
        START GAME
      </button>
    </div>
  );
};

export default PlayButton;
