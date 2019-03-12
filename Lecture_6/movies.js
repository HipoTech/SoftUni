function movies(input) {
    class Movie {
        constructor(name, director, date) {
            this.name = name,
                this.director = director,
                this.date = date
        }
    }
    let arrayOfComands = input.map(x => x.split(" "));
    let movie = [];
    for (let commandLine of arrayOfComands) {
        if (commandLine[0] === "add") {
            commandLine.splice(0, 2);
            movie.push(new Movie(commandLine.join(" "), "undefined", "undefined"));
        } else if (commandLine.includes("directed")) {
            let index = commandLine.indexOf("directed");
            commandLine.splice(index, 2);
            for (let element of movie) {
                if (element["name"] === commandLine.slice(0, index).join(" ")) {
                    element["director"] = commandLine.slice(index).join(" ")
                }
            }
        } else if (commandLine.includes("on")) {
            let index = commandLine.indexOf("on");
            commandLine.splice(index, 2);
            for (let element of movie) {
                if (element["name"] === commandLine.slice(0, index).join(" ")) {
                    element["date"] = commandLine.slice(index).join(" ")
                }
            }
        }
    }

    movie.forEach(element => {
        if (Object.values(element).some(x => x === "undefined")) {


        } else {
            console.log(JSON.stringify(element));
        }
    });

}
movies(['add movie Fast and Furious',
    'add movie Godfather',
    'add movie Inception',
    'Inception directed by Christopher Nolan',
    'Godfather directed by Francis Ford Coppola',
    'Godfather on date 29.07.2018',
    'Fast and Furious on date 30.07.2018',
    'Batman on date 01.08.2018',
    'Fast and Furious directed by Rob Cohen'])