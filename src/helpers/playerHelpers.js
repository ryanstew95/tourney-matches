export const preparePlayerData = (playerData) => {
return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
return playerDataArray.map(player => {
  // calculating the num of wins in the mathdata
  const currentWins = matchData.reduce((accumulator, match) => {
    // adds a win if the gamertag matches
    if (match.winner === player.gamerTag) {
      return accumulator += 1;
    } else {
      return accumulator;
    }
  }, 0);

  // assigns the value to the wins key
  player.wins = currentWins;

  return player
});
}
// output: [{player}, {player}] (each player having a win key and a numerical value)