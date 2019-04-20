function cardGame(params) {
    let map = new Map();
    let sets = params.map(x => x.split(": "));

    sets.forEach(element => {
        if (!map.has(element[0])) {
            map.set(element[0], element[1])
        } else {
            let bufer = map.get(element[0]) + ", " + element[1];
            map.set(element[0], bufer);
        }
    });

    for (let kvp of map) {
        let bufer = kvp[1].split(", ");
        map.set(kvp[0], bufer);
    }

    for (const kvp of map) {
        let totlaPower = calculate(kvp[1]);
        map.set(kvp[0], totlaPower);
    }

    function removeDuplicate(cards) {
        for (let i = 0; i < cards.length; i++) {
            for (let j = i + 1; j < cards.length; j++) {
                if (cards[i] === cards[j]) {
                    cards.splice(j, 1);
                    removeDuplicate(cards);
                }
            }
        }
    }

    function calculate(cards) {
        removeDuplicate(cards)

        let totlaPower = 0;
        cards.forEach(card => {
            let cardSeparation = card.split("");
            let multiplier = ""
            let power = 0;
            let color = 0;

            if (isNaN(cardSeparation[0])) {
                if (cardSeparation[0] === "J") {
                    power = 11;
                }
                if (cardSeparation[0] === "Q") {
                    power = 12;
                }
                if (cardSeparation[0] === "K") {
                    power = 13;
                }
                if (cardSeparation[0] === "A") {
                    power = 14;
                }
                multiplier = cardSeparation[1];
            } else {
                if (cardSeparation.length > 2) {
                    power = Number(cardSeparation[0] + cardSeparation[1])
                    multiplier = cardSeparation[2];
                } else {
                    power = Number(cardSeparation[0]);
                    multiplier = cardSeparation[1];
                }
            }

            switch (multiplier) {
                case "S":
                    color = 4
                    break;
                case "H":
                    color = 3
                    break;
                case "D":
                    color = 2
                    break;
                case "C":
                    color = 1
                    break;
                default:
                    break;
            }

            totlaPower += power * color;
        });
        return totlaPower;
    }
    let ans = [];
    for (const kvp of map) {
        ans.push(kvp);
    }
    console.log(ans.map(x => x.join(": ")).join("\n"));


}
cardGame(['Pesho: 2C, 4H, 9H, AS, QS',//145
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'] //22
)