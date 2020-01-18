function inventory(inputArea) {
    class Heroes{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    let heroesOfTheArray = [];
    let arrayOfHeroes = inputArea.map(x => x.split(" / "));
    arrayOfHeroes.forEach(heroOfArray => {
        heroesOfTheArray.push( new Heroes(heroOfArray[0],Number(heroOfArray[1]),heroOfArray[2].split(", ")));
    });
    console.log(JSON.stringify(heroesOfTheArray));
    
}
inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);