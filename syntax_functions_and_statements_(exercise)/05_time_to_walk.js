function timeToWalk(numOfSteps, letngthFootprintInMeters, speed) {

    let totalDistanceInMeters = numOfSteps * letngthFootprintInMeters;
    let restTimeInSeconds = 0;

    for (let i = 1; i <= totalDistanceInMeters; i++) {
        if (i % 500 === 0) {
            restTimeInSeconds += 60;
        }
    }

    let totalTimeInSeconds = Math.ceil(((totalDistanceInMeters / (speed * 1000)) + restTimeInSeconds / 3600) * 3600);

    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds / 60) % 60);
    let seconds = totalTimeInSeconds;

    while (seconds > 60) {
        seconds -= 60;
    }

    if (hours < 9) {
        hours = `0${hours}`;
    }

    if (minutes < 9) {
        minutes = `0${minutes}`;
    }

    if (seconds < 9) {
        seconds = `0${seconds}`;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);

timeToWalk(2564, 0.70, 5.5);