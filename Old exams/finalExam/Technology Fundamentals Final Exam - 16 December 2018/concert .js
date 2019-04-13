function concert(inputArea) {
    let totalTime = 0;
    let band = {};

    for (const line of inputArea) {
        let [command, bandName, bandInfo] = line.split('; ');
        if (command === 'start of concert') {
            break;
        }
        if (!band.hasOwnProperty(bandName)) {
            band[bandName] = {
                Time: 0,
                Members: new Set()
            }
        }
        if (command === 'Play') {
            let time = Number(bandInfo);
            totalTime += time;
            band[bandName].Time += time;
        } else if (command === 'Add') {
            let names = bandInfo.split(', ')
            names.forEach(name => {
                band[bandName].Members.add(name)
            });
        }
    }
    console.log(`Total time: ${totalTime}`);

    Object
        .entries(band)
        .sort((a, b) => {
            if (a[1].Time - b[1].Time === 0) {
                return a[0] > b[0];
            } else {
                return b[1].Time - a[1].Time;
            }
        })
        .forEach(band => {
            console.log(`${band[0]} -> ${band[1].Time}`);
        });

    let lastBand = inputArea.pop();
    console.log(lastBand);
    band[lastBand].Members.forEach(member => {
        console.log(`=> ${member}`);
    });
}
concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']
)