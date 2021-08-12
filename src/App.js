import { useState } from "react";
import Scoreboard from "./components/scoreboard/Scoreboard";
import Board from "./components/board/Board";
import JSONBoard from "./board.json";
import PlayersForm from "./components/form/Players-Form";
import { randomPlayer } from "./Start-Game";

const characters = ["Dog", "Cherry", "Car", "Sphinx"];

const App = () => {
  const [playersCount, setPlayersCount] = useState(0);
  const [players, setPlayers] = useState({});
  const [canStartPlay, setCanStartPlay] = useState(false);

  const submitForm = (values) => {
    addPlayer(values);
    newPlayer();
  };

  const addPlayer = (values) => {
    characters.splice(characters.indexOf(values.character), 1);
    setPlayers({ ...players, [values?.username]: values });
    values.money = 1000;
  };

  const newPlayer = () => {
    setPlayersCount(playersCount + 1);
  };

  const shouldDisplayForm = () => {
    return playersCount < 2;
  };

  return (
    <>
      {Object.keys(players).length ? <Scoreboard players={players} /> : null}
      <Board gameTiles={JSONBoard} />
      {canStartPlay ? (
        console.log(randomPlayer(players))
      ) : shouldDisplayForm() ? (
        <PlayersForm
          characters={characters}
          submitForm={submitForm}
          playersCount={playersCount}
        />
      ) : (
        setCanStartPlay(true)
      )}
    </>
  );
};

export default App;
