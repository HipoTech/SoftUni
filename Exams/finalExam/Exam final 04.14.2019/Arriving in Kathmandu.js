function problem1(params) {
    let i = 0;
    let regex = /[!@#$?\dA-Za-z]+[=][\d]+[<]+.+/;  //  /[!@#$?\dA-Za-z]+[=][\d]+[<]+.+/g;
    let nameRegex = /[\dA-Za-z]+/;
    let correctName = [];
    while (params[i] != 'Last note') {
        let selectionArray = regex.exec(params[i]);
        if (regex.test(params[i])) {
            if (selectionArray[0] !== params[i]) {
                console.log(`Nothing found!`);
            } else {
                let [name, secondPart] = params[i].split('=');
                let secondpartSplited = secondPart.split('<<');
                let lengthOfPeek = Number(secondpartSplited[0]);
                let geohashcode = secondpartSplited[1];
                if (geohashcode.length === lengthOfPeek) {
                    let nameArrea = name.split('');
                    nameArrea.forEach(simbol => {
                        if (nameRegex.test(simbol)) {
                            correctName.push(simbol);
                        }
                    });
                    console.log(`Coordinates found! ${correctName.join('')} -> ${geohashcode}`);
                    correctName = []
                } else {
                    console.log(`Nothing found!`);
                }
    
            }
        }else{
            console.log(`Nothing found!`);
        }

        i++;
    }
}
problem1(['!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note']
)
// ['!@Ma?na?sl!u@=7<<tv58ycb4845',
//     'E!ve?rest=.6<<tuvz26',
//     '!K@2.,##$=4<<tvnd',
//     '!Shiha@pan@gma##9<<tgfgegu67',
//     '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
//     'Last note']