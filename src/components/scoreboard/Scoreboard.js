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
          {Object.keys(players).map((value, index) => {
            return (
              <tr className="player-row" key={index}>
                <td className="player-username">{players[value].username}</td>
                <td className="player-character">{players[value].character}</td>
                <td className="player-money">{players[value].money}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
