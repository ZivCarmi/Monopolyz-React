import { useEffect, useState, useMemo } from "react";
import boardJSON from "./board.json";
import Side from "./components/board/sides/Side";
import GamePanel from "./components/game-panel/GamePanel";
import Board from "./components/board/Board";
import PlayersForm from "./components/form/Players-Form";
import dog from "./images/dog.png";
import cherry from "./images/cherry.png";
import car from "./images/car.png";
import sphinx from "./images/sphinx.png";
import { randomPlayer } from "./Helpers";

const boardBuilder = (gameTiles) => {
  const tilesStructure = [];
  const sidesClasses = ["top", "right", "bottom", "left"];

  for (let c = 0; c < gameTiles.corners.length; c++) {
    tilesStructure.push(
      <div className={sidesClasses[c]} key={c}>
        <div
          id={gameTiles.corners[c].index}
          className={`${gameTiles.corners[c].type} ${gameTiles.corners[c].id} tile`}
          index={gameTiles.corners[c].index}
          key={gameTiles.corners[c].id}
        >
          {gameTiles.corners[c].name}
        </div>
        <Side
          sides={gameTiles.sides[c]}
          classes={["row", c % 2 === 0 ? "horizontal" : "vertical"]}
          key={c}
        />
      </div>
    );

    // tiles.push(gameTiles.corners[c]);

    // for (let s = 0; s < gameTiles.sides[c].length; s++) {
    //   tiles.push(gameTiles.sides[c][s]);
    // }
  }

  return tilesStructure;
};

const characters = {
  Dog: dog,
  Cherry: cherry,
  Car: car,
  Sphinx: sphinx,
};

const LS_PLAYERS = "monopoly-players";
const LS_CURRENT_TURN = "current-turn";

const App = () => {
  const [playersCount, setPlayersCount] = useState(0);
  const [players, setPlayers] = useState({});
  const [shouldStartGame, setShouldStartGame] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(null);
  const [isPlayerMoved, setIsPlayerMoved] = useState(false);
  // const [isNewTurn, setIsNewTurn] = useState(true);

  const boardTiles = useMemo(() => boardBuilder(boardJSON), []);

  const submitForm = (values) => {
    addPlayer(values);
    newPlayer();
  };

  const addPlayer = (values) => {
    // set player username and character name
    setPlayers({
      ...players,
      [values?.username]: values,
    });

    values.username = values.username.toLowerCase();

    // set player money
    values.money = "1000$";

    // set player char image
    values.character.img = characters[values.character.name];

    // set player position on board
    values.position = 0;

    // delete char from characters
    delete characters[values.character.name];
  };

  const newPlayer = () => {
    setPlayersCount(playersCount + 1);
  };

  const startGame = () => {
    setShouldStartGame(true);
  };

  useEffect(() => {
    if (playersCount === 4) {
      startGame();
    }
  }, [playersCount]);

  useEffect(() => {
    const storagedPlayers = JSON.parse(localStorage.getItem(LS_PLAYERS));
    const storagedTurn = JSON.parse(localStorage.getItem(LS_CURRENT_TURN));

    // get storaged players
    if (storagedPlayers) {
      setShouldStartGame(true);
      setPlayers(storagedPlayers);
    }

    // get storaged turn
    if (storagedTurn) {
      setPlayerTurn(storagedTurn);
    }
  }, []);

  useEffect(() => {
    if (shouldStartGame) {
      localStorage.setItem(LS_PLAYERS, JSON.stringify(players));
      localStorage.setItem(LS_CURRENT_TURN, JSON.stringify(playerTurn));
    }
  }, [shouldStartGame, players, playerTurn]);

  const setFirstTurn = () => {
    if (!playerTurn && shouldStartGame) {
      setPlayerTurn(randomPlayer(players));
    }
  };

  useEffect(() => {
    if (playerTurn) {
      playerTurn.isRolled = false;
    }
  }, [playerTurn]);

  const handlePlayerTurn = () => {
    setIsPlayerMoved(true);
  };

  const handlePlayerPosition = (dices) => {
    const dicesSum = dices["dice1"].value + dices["dice2"].value;

    // update player position
    playerTurn.position += dicesSum;

    // get player block
    const playerBlock = document.getElementById(playerTurn.username);

    // destination player tile
    const destinationTile = document.getElementById(playerTurn.position);

    // new players block div
    const playersBlock = document.createElement("div");
    playersBlock.className = "players-block";

    // MAGIC IS HERE! - move the player to his new position
    destinationTile.appendChild(playersBlock).appendChild(playerBlock);

    handlePlayerTurn();
  };

  return (
    <>
      {Object.keys(players).length ? (
        <GamePanel
          players={players}
          isPlayerMoved={isPlayerMoved}
          playerTurn={playerTurn}
        />
      ) : null}
      <Board
        boardTiles={boardTiles}
        shouldStartGame={shouldStartGame}
        players={players}
        playerTurn={playerTurn}
        handlePlayerPosition={handlePlayerPosition}
      />
      {shouldStartGame ? (
        setFirstTurn()
      ) : (
        <PlayersForm
          characters={characters}
          submitForm={submitForm}
          playersCount={playersCount}
          startGame={startGame}
          players={players}
        />
      )}
    </>
  );
};

export default App;
