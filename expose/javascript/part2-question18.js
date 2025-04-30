function printCurrentTime() {
    let currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
}

setInterval(printCurrentTime, 1000);