function keys(inputString) {
    let regex = /[a-zA-Z0-9]{25}|[a-zA-Z0-9]{16}/;
    let areaInput = inputString[0].split('&');
    let i = 0;
    let ans = [];
    for (let j = 0; j < areaInput.length; j++) {
        let pattern = regex.exec(areaInput[j]);
        if (pattern != null) {
            let keyPassedTest = areaInput[j].split('');
            let newKey = [];
            let group = '';
            keyPassedTest.forEach(simbol => {
                if (keyPassedTest.length === 16) {
                    if (isNaN(simbol)) {
                        group += simbol.toUpperCase();
                    } else {
                        group += Math.abs(Number(simbol) - 9);
                    }
                    i++;
                    if (i === 4) {
                        newKey.push(group);
                        group = ''
                        i = 0;
                    }
                } else {
                    if (isNaN(simbol)) {
                        group += simbol.toUpperCase();
                    } else {
                        group += Math.abs(Number(simbol) - 9);
                    }
                    i++;
                    if (i === 5) {
                        newKey.push(group);
                        group = ''
                        i = 0;
                    }
                }
            });
            ans.push(newKey.join('-'));
        }
    }
    console.log(ans.join(', '));
}
keys(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs'])