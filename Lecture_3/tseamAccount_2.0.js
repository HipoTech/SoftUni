function tseamAccount(input) {
    /*let arrey = String(input).split(' ');*/
    let arrey = input;
    let gamelist = [];
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] === 'Play!') {
            break;
        } else if (arrey[i] === 'Install') {
            gamelist.push(arrey[i + 1]);
            i++;
        } else if (arrey[i] === 'Uninstall') {
            let index = gamelist.indexOf(arrey[i + 1]);
            if (index > -1) {
                gamelist.splice(index, 1);
            }
            i++;
        } else if (arrey[i] === 'Update') {
            let index = gamelist.indexOf(arrey[i + 1]);
            if (index > -1) {
                let index = gamelist.indexOf(arrey[i + 1]);
                if (index > -1) {
                    gamelist.splice(index, 1);
                }
                gamelist.push(arrey[i + 1]);
            }
            i++;
        } else if (arrey[i] === 'Expansion') {
            let expansionArrey = String(arrey[i + 1]).split('-');
            for (let j = 0; j < gamelist.length; j++) {
                if (gamelist[j] === expansionArrey[0]) {
                    gamelist.splice((j + 1), 0, `${expansionArrey[0]}:${expansionArrey[1]}`);
                }
            }
            i++;
        } else {
            gamelist.push(arrey[i]);
        }
    }
    let list = '';
    for (let j = 0; j < gamelist.length; j++) {
        if (j === gamelist.length - 1) {
            list += gamelist[j];
        } else {
            list += gamelist[j] + ' ';
        }
    }
    console.log(list);
}

tseamAccount(['CS WoW Diablo'
,'Install LoL'
,'Uninstall WoW'
,'Update Diablo'
,'Expansion CS-Go'
,'Play!'])