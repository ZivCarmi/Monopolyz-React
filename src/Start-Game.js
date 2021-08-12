export const randomPlayer = (players) => {
  var keys = Object.keys(players);
  return players[keys[(keys.length * Math.random()) << 0]];
};
