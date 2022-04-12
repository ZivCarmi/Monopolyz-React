import { useState, useEffect } from "react";
import PlayButton from "./Play-Button";

const initialName = "";
const initialCharacter = { name: "" };
const initialErrors = { username: "", character: "" };

const PlayersForm = ({
  characters,
  submitForm,
  playersCount,
  startGame,
  players,
}) => {
  const [username, setUsername] = useState(initialName);
  const [character, setCharacter] = useState(initialCharacter);
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    setUsername(initialName);
    setCharacter(initialCharacter);
    setErrors(initialErrors);
  }, [playersCount]);

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleCharacterChange = (e) => {
    setCharacter({
      ...character,
      name: e.target.value,
    });
  };

  const handleValidation = () => {
    let errors = {};

    if (!username?.length) {
      errors.username = "You must choose user name";
    } else if (username?.length < 2) {
      errors.username = "User name must contains at least 2 characters";
    } else if (players.hasOwnProperty(username.toLowerCase())) {
      errors.username = "User name is already taken";
    }

    if (!character.name) {
      errors.character = "You must pick a character";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = handleValidation();
    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      return setErrors(errors);
    }

    submitForm({ username, character });
  };

  return (
    <div className="players-form">
      <h2 className="player-num">Player {playersCount + 1}</h2>
      <form onSubmit={handleSubmit}>
        <div className="choose-name form-input">
          <label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              value={username}
              onChange={handleUsernameChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </label>
        </div>
        <div className="char-select">
          {Object.keys(characters).map((char, index) => {
            return (
              <div className="form-input" key={index}>
                <label htmlFor={char} className={char}>
                  <input
                    type="radio"
                    name="character"
                    id={char}
                    value={char}
                    checked={char === character.name}
                    onChange={handleCharacterChange}
                  />
                  <img src={characters[char]} alt={char} />
                </label>
              </div>
            );
          })}
          {errors.character && (
            <span className="error">{errors.character}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {playersCount >= 2 ? <PlayButton startGame={startGame} /> : null}
    </div>
  );
};

export default PlayersForm;
