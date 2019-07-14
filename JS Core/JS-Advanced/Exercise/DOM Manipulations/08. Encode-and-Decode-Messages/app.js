function encodeAndDecodeMessages() {
    const btns = [...document.querySelectorAll('button')];
    const btnSend = btns.filter(x => x.textContent === 'Encode and send it')[0];
    const btnRead = btns.filter(x => x.textContent === 'Decode and read it')[0];
    const messageBoxes = document.querySelectorAll('textarea');
    let messageSend = [];
    function encode() {
        const message = messageBoxes[0].value;
        const messageToDecode = messageBoxes[1];
        const messageAreay = message.split('')
            .map((simbol) => simbol.charCodeAt(0) + 1);
        messageToDecode.value = messageAreay
            .map((simbol) => String.fromCharCode(simbol))
            .join('');
        messageSend = messageAreay;
        messageBoxes[0].value = '';
    }

    function decode() {
        const messageToDecode = messageBoxes[1];
        messageToDecode.value = messageSend
            .map((simbol) => String.fromCharCode(simbol - 1))
            .join('')
    }

    btnSend.addEventListener('click', encode);
    btnRead.addEventListener('click', decode);
}