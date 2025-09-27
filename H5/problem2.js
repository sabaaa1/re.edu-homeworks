function createLeaderboard(players) {
  const sortedPlayers = [...players]
    .sort((a, b) => b.score - a.score)
    .map((player, index) => ({
      ...player,
      rank: index + 1,
    }));

  return sortedPlayers;
}

const players = [
  { name: "Ana", score: 50 },
  { name: "Nika", score: 80 },
  { name: "Luka", score: 70 },
];

console.log(createLeaderboard(players));
