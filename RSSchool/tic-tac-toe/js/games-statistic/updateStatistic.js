let gameNumber = 0;

function updateStatistic(winner, steps) {
    let storedStatistic = JSON.parse(localStorage.getItem("statistic")) || [];
    const limit = storedStatistic.length > 9;

    const gameResult = {
        gameNumber: (gameNumber += 1),
        steps: steps,
        winner: winner === "Tied" ? winner : `player ${winner}`,
    };

    if (limit) {
        storedStatistic.shift();
    }
    storedStatistic.push(gameResult);
    storedStatistic = JSON.stringify(storedStatistic);
    localStorage.setItem("statistic", storedStatistic);
}

export default updateStatistic;
