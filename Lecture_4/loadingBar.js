function loadingBar(number){
    let loadingbar = ['[','.','.','.','.','.','.','.','.','.','.',']'];
    for (let i = 1; i <=(number/10) ; i++) {
        loadingbar[i]='%';
    }
    if(number<100){
        console.log(`${number}% ${loadingbar.join('')}`);
        console.log('Still loading...');
    }else{
        console.log(`${number}% Complete!`);
        console.log(`${loadingbar.join('')}`);
    }
}
loadingBar(10);