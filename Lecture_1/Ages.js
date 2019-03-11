function Ages(age) {
    let ageOf = age;
    if (ageOf >= 0 && ageOf <= 2) {
        console.log('baby');
    } else if (ageOf >= 3 && ageOf <= 13) {
        console.log('child');
    }else if (ageOf >= 14 && ageOf <= 19) {
        console.log('teenager');
    }else if (ageOf >= 20 && ageOf <= 65) {
        console.log('adult');
    }else if (ageOf >= 66) {
        console.log('elder');
    }
}

Ages(100)