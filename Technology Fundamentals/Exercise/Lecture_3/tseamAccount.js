function tseamAccount(input) {
    let arrey = String(input).split(' ');
    let gamelist = [];
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] === 'Play!') {
            break;
        } else if (arrey[i] === 'Install') {
            gamelist.push(arrey[i + 1]);
            i++;
        } else if (arrey[i] === 'Uninstall') {
            gamelist = uninstall(gamelist, arrey[i + 1]);
            i++;
        } else if (arrey[i] === 'Update') {
            update(gamelist, arrey[i + 1], arrey, i);
            i++;
        } else if (arrey[i] === 'Expansion') {
            expansion(gamelist, arrey, i);
            i++;
        } else {
            gamelist.push(arrey[i]);
        }
    }
    let gameListResult = print(gamelist);
    console.log(gameListResult);

    function uninstall(gamelist, arreyFromI) {
        let index = gamelist.indexOf(arreyFromI);
        if (index > -1) {
            gamelist.splice(index, 1);
        }
            return gamelist;
    }

    function update(gamelist, arreyFromI, arrey, i) {
        let index = gamelist.indexOf(arreyFromI);
        if (index > -1) {
            gamelist = uninstall(gamelist, arrey[i + 1]);
            gamelist.push(arrey[i + 1]);
        }
            return gamelist;
    }

    function expansion(gamelist, arrey, i) {
        let expansionArrey = arrey[i + 1].split('-');
        for (let j = 0; j < gamelist.length; j++) {
            if (gamelist[j] === expansionArrey[0]) {
                gamelist.splice((j + 1), 0, `${expansionArrey[0]}:${expansionArrey[1]}`);
            }
        }
    }

    function print(gamelist) {
        let list = '';
        for (let j = 0; j < gamelist.length; j++) {
            if (j === gamelist.length - 1) {
                list += gamelist[j];
            } else {
                list += gamelist[j] + ' ';
            }
        }
        return list;
    }
}

tseamAccount('CS WoW Diablo Install LoL Uninstall WoW Update Diablo Expansion CS-Go Play!');