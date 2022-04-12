const Players = ({ player }) => {
  return (
    <div
      className="player-block"
      data-player-name={player.username}
      id={player.username}
    >
      <button type="button">
        <img src={player.character.img} alt={player.character.name} />
      </button>
    </div>
  );
};

export default Players;
