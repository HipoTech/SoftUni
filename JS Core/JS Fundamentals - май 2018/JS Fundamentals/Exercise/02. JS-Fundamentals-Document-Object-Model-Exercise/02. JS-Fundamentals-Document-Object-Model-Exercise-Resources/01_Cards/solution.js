function solve() {
    function resedScore() {
        result[0].textContent = '';
        result[2].textContent = '';
    }

    let cardsOfFirstPlayer = document.querySelectorAll('#player1Div img');
    let cardsOfSecondPlayer = document.querySelectorAll('#player2Div img');
    let result = document.querySelectorAll('#result span');
    let history = document.querySelector('#history');

    for (let j = 0; j < cardsOfFirstPlayer.length; j++) {
        cardsOfFirstPlayer[j].addEventListener('click', cardAnalize);

    };
    for (let k = 0; k < cardsOfFirstPlayer.length; k++) {
        cardsOfSecondPlayer[k].addEventListener('click', cardAnalize)

    };

    function cardAnalize() {
        let player = this.parentNode.id;


        if (player === 'player1Div') {
            if (result[0].textContent === '') {
                this.src = 'images/whiteCard.jpg';
                result[0].textContent = this.name;
                if (this.name !== '') {
                    this.style = 'border: 2px solid black'
                }
            }
        }
        if (player === 'player2Div') {
            if (result[2].textContent === '') {
                this.src = 'images/whiteCard.jpg';
                result[2].textContent = this.name;
                if (this.name !== '') {
                    this.style = 'border: 2px solid black'
                }
            }
        }

        if (result[0].textContent !== '' && result[2].textContent !== '') {
            if (Number(result[0].textContent) > Number(result[2].textContent)) {
                for (let i = 0; i < cardsOfFirstPlayer.length; i++) {
                    if (cardsOfFirstPlayer[i].name === result[0].textContent) {
                        cardsOfFirstPlayer[i].style = 'border: 2px solid green'
                    }
                }

                for (let i = 0; i < cardsOfSecondPlayer.length; i++) {
                    if (cardsOfSecondPlayer[i].name === result[2].textContent) {
                        cardsOfSecondPlayer[i].style = 'border: 2px solid red'
                    }
                }
            } else {
                for (let i = 0; i < cardsOfFirstPlayer.length; i++) {
                    if (cardsOfFirstPlayer[i].name === result[0].textContent) {
                        cardsOfFirstPlayer[i].style = 'border: 2px solid red'
                    }
                }
                for (let i = 0; i < cardsOfSecondPlayer.length; i++) {
                    if (cardsOfSecondPlayer[i].name === result[2].textContent) {
                        cardsOfSecondPlayer[i].style = 'border: 2px solid green'
                    }
                }
            }
            history.textContent += `[${result[0].textContent} vs ${result[2].textContent}] `;
            setTimeout(resedScore(), 2000);
        }
    }
}