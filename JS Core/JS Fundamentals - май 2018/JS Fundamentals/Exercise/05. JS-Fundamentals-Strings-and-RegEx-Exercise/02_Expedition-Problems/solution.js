    function solve() {
        let string = document.querySelector('#string').value;
        let text = document.querySelector('#text').value;
        let result = document.querySelector('#result');

        let regex = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gim;
        let north = '';
        let east = '';
        let firstSet = regex.exec(text)[2];
        let secondSet = regex.exec(text)[3];
        console.log(regex.exec(text));
        console.log(regex.exec(firstSet));
        console.log(regex.exec(secondSet));

        let matchDirection = regex.exec(text)[1].toLowerCase();

        while (regex.exec(text) !== null) {
            if (matchDirection === 'north') {
                north = `${firstSet}.${secondSet} N`;
            } else if (matchDirection === 'east') {
                east = `${firstSet}.${secondSet} E`;
            }
            firstSet = regex.exec(text);
            secondSet = regex.exec(text);
        };

        let pNorth = document.createElement('p');
        pNorth.textContent = north;
        let pEast = document.createElement('p');
        pEast.textContent = east;

        let message = 'Message: ' + text.match(new RegExp(`${string}(.*)${string}`))[1];
        let pMessage = document.createElement('p');
        pMessage.textContent = message;

        result.appendChild(pNorth);
        result.appendChild(pEast);
        result.appendChild(pMessage);
    }