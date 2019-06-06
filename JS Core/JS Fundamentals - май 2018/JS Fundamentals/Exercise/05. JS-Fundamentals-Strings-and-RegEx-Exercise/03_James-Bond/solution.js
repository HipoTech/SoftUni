    function solve() {
        console.log(document.querySelector('#array').value);

        let [specialKey, ...messages] = JSON.parse(document.querySelector('#array').value)
        let result = document.querySelector('#result')
        let regex = new RegExp(
            `(?<=\\s|^)${specialKey}\\s+([A-Z!%$#]{8,})(?=\\s|\\.|,|$)`,
            'gi'
        )
        messages.forEach(line => {
            let match = regex.exec(line)

            while (match) {
                let message = match[1]

                if (message === message.toUpperCase()) {
                    let newMessage = message
                        .toLowerCase()
                        .split('')
                        .map(c =>
                            c === '!' ? 1 : c === '%' ? 2 : c === '#' ? 3 : c === '$' ? 4 : c
                        )
                        .join('')

                    line = line.replace(message, newMessage)
                }
                match = regex.exec(line)
            }
            let p = document.createElement('p')
            p.textContent = line
            result.appendChild(p)
        })
    }