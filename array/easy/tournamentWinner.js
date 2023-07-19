function tournamentWinner(competitions, results) {
  let winnerPoints = {};
  for (let i = 0; i < results.length; i++) {
    let winner = results[i];
    let winnertTeam = "";
    if (winner) {
      winnertTeam = competitions[i][0];
    } else {
      winnertTeam = competitions[i][1];
    }
    winnerPoints[winnertTeam] = winnerPoints[winnertTeam]
      ? winnerPoints[winnertTeam] + 3
      : 3;
  }
  let winner = "";
  let points = 0;
  for (const team in winnerPoints) {
    if (winnerPoints[team] > points) {
      winner = team;
      points = winnerPoints[team];
    }
  }
  return winner;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);

// Time O(n) || space O(k)

function tournamentWinnerWithOneLoop(competitions, results) {
  let winnerPoints = { "": 0 };
  let winner = "";
  for (let i = 0; i < results.length; i++) {
    let currentWinner = "";
    if (results[i]) {
      currentWinner = competitions[i][0];
    } else {
      currentWinner = competitions[i][1];
    }
    winnerPoints[currentWinner] = winnerPoints[currentWinner]
      ? winnerPoints[currentWinner] + 3
      : 3;
    if (winnerPoints[currentWinner] > winnerPoints[winner]) {
      winner = currentWinner;
    }
  }
  return winner;
}

console.log(
  tournamentWinnerWithOneLoop(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
