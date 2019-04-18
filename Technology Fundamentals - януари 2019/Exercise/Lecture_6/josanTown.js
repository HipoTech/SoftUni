function town(inputArea) {
    let areaOfTowns = inputArea.map(element => element.split("|").filter(x => x != ""));
    let towns = [];
    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town,
                this.Latitude = latitude,
                this.Longitude = longitude
        }
    }
    for (let i = 1; i < areaOfTowns.length; i++) {
        towns.push(new Town(areaOfTowns[i][0].replace(" ", "").replace(" ", ""), +Number(areaOfTowns[i][1]).toFixed(2), +Number(areaOfTowns[i][2]).toFixed(2)));

    }
    console.log(JSON.stringify(towns));

}
town(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)