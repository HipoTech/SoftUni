function roadRadar(params) {
    switch (params[1]) {
        case 'motorway':
            if (params[0] > 130 && params[0] <= 150) {
                console.log('speeding');
            } else if (params[0] > 150 && params[0] <= 170) {
                console.log('excessive speeding');
            } else if (params[0] > 170) {
                console.log('reckless driving');
            }
            break;
        case 'interstate':
            if (params[0] > 90 && params[0] <= 110) {
                console.log('speeding');
            } else if (params[0] > 110 && params[0] <= 130) {
                console.log('excessive speeding');
            } else if (params[0] > 130) {
                console.log('reckless driving');
            }
            break;
        case 'city':
            if (params[0] > 50 && params[0] <= 70) {
                console.log('speeding');
            } else if (params[0] > 70 && params[0] <= 90) {
                console.log('excessive speeding');
            } else if (params[0] > 90) {
                console.log('reckless driving');
            }
            break;
        case 'residential':
            if (params[0] > 20 && params[0] <= 40) {
                console.log('speeding');
            } else if (params[0] > 40 && params[0] <= 60) {
                console.log('excessive speeding');
            } else if (params[0] > 60) {
                console.log('reckless driving');
            }
            break;
        default:
            break;
    }
}
roadRadar([40, 'city'])