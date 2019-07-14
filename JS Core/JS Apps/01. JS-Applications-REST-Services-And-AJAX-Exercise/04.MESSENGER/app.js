function attachEvents() {
    const author = document.querySelector('#author');
    const content = document.querySelector('#content');
    const submit = document.querySelector('#submit');
    const refresh = document.querySelector('#refresh');
    const messages = document.querySelector('#messages');
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';

    const httpRequester = {
        get: (url) => {
            return fetch(url, {
            });
        },
        post: (data) => {
            return fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(() => {
                    clearContent(content);
                })
                .then(() => loadMessages());
        },
    }

    const checkServerResponse = (serverResponse) => {
        if (serverResponse.status > 300) {
            window.alert(`Server Error: ${serverResponse.status}`)
            throw new Error(`Server Error: ${serverResponse.status}`)
        }
        return serverResponse;
    }

    const createNewRecord = (newRecordToCreate, key) => {
        messages.value += `\n`;
        messages.value += `${newRecordToCreate.author}: ${newRecordToCreate.content}`;
        messages.scrollTop = messages.scrollHeight;
    }

    const loadMessages = () => {
        clearContent(messages);
        console.log('Refreshed!');

        httpRequester.get(url)

            .then((response) => {
                return checkServerResponse(response).json()
            })
            .then((messageServer) => {
                if (JSON.stringify(messageServer) === 'null') {
                    window.alert('No messages!')
                    throw new Error('Database is empty!!! No messages!')
                }
                for (const elementFromServer in messageServer) {
                    const record = messageServer[elementFromServer];
                    const key = elementFromServer;
                    createNewRecord(record, key);
                }
            })
    }

    const clearContent = (elementToClear) => {
        elementToClear.innerHTML = '';
        elementToClear.value = '';
    };

    const sendMessages = () => {
        const data = {
            author: author.value,
            content: content.value
        };
        httpRequester.post(data);
    }

    const sendToEnterPressed = (e) => {
        let key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            sendMessages();
        }
    }

    refresh.addEventListener('click', loadMessages);
    submit.addEventListener('click', sendMessages);
    content.addEventListener('keypress', sendToEnterPressed);
    loadMessages();
    window.setInterval(loadMessages, 20000);
}
attachEvents();