import boardJSON from "./board.json";

export const randomPlayer = (players) => {
  var keys = Object.keys(players);
  return players[keys[(keys.length * Math.random()) << 0]];
};

export const getCurrentTile = (playerTurn) => {
  return document.getElementById(playerTurn.position);
};

const between = (x, min, max) => {
  return x >= min && x <= max;
};

export const getTile = (tileID) => {
  let foundTile;
  // corners
  if (tileID % 10 === 0) {
    boardJSON.corners.map((corner, key) => {
      return (foundTile = corner.index === tileID ? console.log(corner) : "");
    });
  } else {
    const boardSides = boardJSON.sides;
    for (const side in boardSides) {
      if (between(tileID, 0, 9)) {
        const sideNumber = boardSides[0];
        for (let key = 0; key < sideNumber.length; key++) {
          if (sideNumber[key].index === tileID) {
            foundTile = sideNumber[key];
          }
        }
      } else if (between(tileID, 11, 19)) {
        const sideNumber = boardSides[1];
        for (let key = 0; key < sideNumber.length; key++) {
          if (sideNumber[key].index === tileID) {
            foundTile = sideNumber[key];
          }
        }
      } else if (between(tileID, 21, 29)) {
        const sideNumber = boardSides[2];
        for (let key = 0; key < sideNumber.length; key++) {
          if (sideNumber[key].index === tileID) {
            foundTile = sideNumber[key];
          }
        }
      } else if (between(tileID, 31, 39)) {
        const sideNumber = boardSides[3];
        for (let key = 0; key < sideNumber.length; key++) {
          if (sideNumber[key].index === tileID) {
            foundTile = sideNumber[key];
          }
        }
      } else {
        return "Tile wasn't found in side number" + side;
      }
    }
    // sides
    // boardSides.map((side, key) => {
    //   if (between(tileID, 0, 9)) {
    //     boardSides[0].map((tile, key2) => {
    //       return (foundTile = tile.index === tileID ? tile : "");
    //     });
    //   } else if (between(tileID, 11, 19)) {
    //     boardSides[1].map((tile, key2) => {
    //       return (foundTile = tile.index === tileID ? tile : "");
    //     });
    //   } else if (between(tileID, 21, 29)) {
    //     boardSides[2].map((tile, key2) => {
    //       return (foundTile = tile.index === tileID ? tile : "");
    //     });
    //   } else if (between(tileID, 31, 39)) {
    //     boardSides[3].map((tile, key2) => {
    //       return (foundTile = tile.index === tileID ? tile : "");
    //     });
    //   } else {
    //     return "Tile wasn't found";
    //   }
    // });

    return foundTile;
  }
};
