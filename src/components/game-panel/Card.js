// import { useEffect, useState } from "react";
import { getTile } from "../../Helpers";
import Property from "./Cards/Property";

const Card = ({ playerTurn }) => {
  const tile = getTile(playerTurn.position);

  console.log(tile);

  const renderCard = () => {
    switch (tile.type) {
      case "property":
      case "airport":
        return <Property tile={tile} />;
      default:
        return "No card";
    }
  };

  return <div className="card">{renderCard()}</div>;
};

export default Card;
