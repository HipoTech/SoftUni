function solve(inputArray) {

    let list = inputArray.shift().split('&');
    let i = 0;

    while (inputArray[i] !== 'Finished!') {
        let tokens = inputArray[i++].split(' ');
        let command = tokens[0];
        let name = tokens[1];
        let index = list.indexOf(name);

        switch (command) {
            case 'Bad':
                if (index === -1) {
                    list.unshift(name);
                }
                break;

            case 'Good':
                if (index !== -1) {
                    list.splice(index, 1);
                }
                break;

            case 'Rename':
                if (index !== -1) {
                    let newName = tokens[2];
                    list.splice(index, 1, newName);
                }
                break;

            case 'Rearrange':
                if (index !== -1) {
                    list.splice(index, 1);
                    list.push(name);
                }
                break;
        }
    }

    console.log(list.join(', '));
}