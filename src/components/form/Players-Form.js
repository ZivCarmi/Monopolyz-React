import React, { useState, useEffect } from "react";

const initialValues = { username: "", character: "" };

const PlayersForm = ({ characters, submitForm, playersCount }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
    setErrors(initialValues);
  }, [playersCount]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleValidation = (values) => {
    let errors = {};

    if (!values?.username?.length) {
      errors.username = "You must choose user name";
    } else if (values?.username?.length < 2) {
      errors.username = "User name must contains at least 2 characters";
    }

    if (!values.character) {
      errors.character = "You must pick a character";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = handleValidation(values);
    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      return setErrors(errors);
    }

    submitForm(values);
  };

  return (
    <div className="players-form">
      <h2 className="player-num">Player {playersCount + 1}</h2>
      <form onSubmit={handleSubmit}>
        <div className="choose-name form-input">
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={values?.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </label>
        </div>
        <div className="char-select">
          {characters.map((char, index) => {
            return (
              <div className="form-input" key={index}>
                <label htmlFor="character" className={char}>
                  <input
                    type="radio"
                    name="character"
                    value={char}
                    checked={char === values.character}
                    onChange={handleChange}
                  />
                  {char}
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
    </div>
  );
};

export default PlayersForm;
