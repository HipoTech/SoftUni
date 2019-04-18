function printTseamAccount(input) {
    let gamesAndComands = input.shift().split(' ');
    input.pop();
    for (let element of input) {
        let areaOfElements = element.split(' ');
        let command = areaOfElements[0];
        let game = areaOfElements[1].split('-')[0];
        let index = gamesAndComands.indexOf(game);

        if (command === 'Install' && index === -1) {
            gamesAndComands.push(game);
        } else if (command === 'Uninstall' && index !== -1) {
            gamesAndComands.splice(index, 1);
        } else if (command === 'Update' && index !== -1) {
            gamesAndComands.push(gamesAndComands.splice(index, 1));
        } else if (command === 'Expansion' && index !== -1) {
            let expansion = areaOfElements[1].replace('-', ':');
            gamesAndComands.splice(index + 1, 0, expansion);
        }
    }
    console.log(gamesAndComands.join(' '));
}
printTseamAccount('CS WoW Diablo Install LoL Uninstall WoW Update Diablo Expansion CS-Go Play!')