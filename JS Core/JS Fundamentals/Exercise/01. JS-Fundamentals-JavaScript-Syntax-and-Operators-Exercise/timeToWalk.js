function timeToWalk(steps, lengthOfOneStep, speed) {
    let distance = (steps * lengthOfOneStep) / 1000;
    let additinalTime = Math.floor(distance / 0.5) * 60;
    let timeInSeconds = ((distance / speed) * 3600) + additinalTime;

    let minutes = Math.floor(timeInSeconds / 60);
    let hours = Math.floor(timeInSeconds / 3600);
    timeInSeconds -= (minutes * 60 + hours * 3600);

    timeInSeconds = String(timeInSeconds.toFixed(0));
    hours = String(hours.toFixed(0));
    minutes = String(minutes.toFixed(0));

    if (hours.length === 1) {
        hours = `0${hours}`;
    }
    if (minutes.length === 1) {
        minutes = `0${minutes}`;
    }
    if (timeInSeconds.length === 1) {
        timeInSeconds = `0${timeInSeconds}`;
    }
    console.log(`${hours}:${minutes}:${timeInSeconds}`);
}
timeToWalk(4000, 0.6, 5)