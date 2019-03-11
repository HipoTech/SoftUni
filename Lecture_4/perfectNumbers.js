function perfectNumber(number){
    let arreyOfdevisors = [];
    let sum = 0;
    for (let i = 1; i < number ; i++) {
        if (number%i === 0){
            arreyOfdevisors.push(i);
        }
    }
    for (let i = 0; i <arreyOfdevisors.length ; i++) {
        sum += arreyOfdevisors[i];
    }
    if (sum === number){
        console.log('We have a perfect number!')
    }else{
        console.log('It’s not so perfect.');
    }
}
perfectNumber(28);