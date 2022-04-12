import { getTile } from "../../../Helpers";

const TileOptions = ({ playerTurn }) => {
  const tile = getTile(playerTurn.position);

  const renderCard = () => {
    switch (tile.type) {
      case "property":
        return "proprty";
      default:
        return "No card";
    }
  };

  return <div>1234</div>;
};

export default TileOptions;
