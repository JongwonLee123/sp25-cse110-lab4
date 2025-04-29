let statistics = {
    redCards: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
}

for(let key in statistics){
    if(key[0] == 'r'){
        // console.log(key + ': ' + statistics[key] + ' starts with r');
        console.log(key + ': ' + statistics[key]);
    }
    else if(statistics[key] % 2 == 1){
        // console.log(key + ': ' + statistics[key] + ' is odd');
        console.log(key + ': ' + statistics[key]);

    }
}