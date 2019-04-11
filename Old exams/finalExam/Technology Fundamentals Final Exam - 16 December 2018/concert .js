function concert(inputArea) {
    let input = inputArea;
    let command = '';
    let i = 0;
    let concertList = {};
    let list = [];
    let totalTime = 0;
    let index = input.indexOf('start of concert')
    while (command !== 'start of concert') {
        let line = input[i].split('; ');
        command = line[0];
        if (command === 'Play') {
            if (!concertList.hasOwnProperty(line[1])) {
                concertList[line[1]] = {
                    'Time': 0,
                    'Band': ''
                }
                concertList[line[1]]['Time'] = Number(line[2]);
            } else {
                concertList[line[1]]['Time'] += Number(line[2]);
            }
        } else if (command === 'Add') {
            if (!concertList.hasOwnProperty(line[1])) {
                concertList[line[1]] = {
                    'Time': 0,
                    'Band': ''
                }
                concertList[line[1]]['Band'] = line[2];
            } else {
                concertList[line[1]]['Band'] += ', ' + line[2];
            }
        } else if (command === 'start of concert') {

            for (const band in concertList) {
                totalTime += Number(concertList[band]['Time']);
                list.push([band, concertList[band]]);
            }
            console.log(`Total time: ${totalTime}`);

            list
                .sort((a, b) => {
                    if (b[1]['Time'] - a[1]['Time'] === 0) {
                        return a[0].localeCompare(b[0]);
                    } else {
                        return b[1]['Time'] - a[1]['Time'];
                    }

                })
                .map((x) => {
                    console.log(`${x[0]} -> ${x[1]['Time']}`)
                }
                );
            console.log(`${input[index + 1]}`);
            list.forEach(finalGroup => {
                if (finalGroup[0] === input[index + 1]) {
                    let unique = [...new Set(finalGroup[1]['Band']
                        .split(', ')
                    )];
                    if (unique.join('') !== '') {
                        console.log('=> ' + unique.join(`\n=> `));
                    }
                }
            });
        }
        i++;
    }
}
concert([
    'Add; The Rolling Stones; m',
    'Play; The Rolling Stones; 0.2',
    'start of concert',
    'The Rolling Stones'
]
)