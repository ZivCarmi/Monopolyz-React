const Scoreboard = ({ players }) => {
  return (
    <div className="scoreboard">
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Character</th>
            <th>Money</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(players).map((username, index) => {
            return (
              <tr className="player-row" key={index}>
                <td className="player-username">{username}</td>
                <td className="player-character">
                  <img
                    src={players[username].character.img}
                    alt={players[username].character.name}
                  />
                </td>
                <td className="player-money">{players[username].money}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
