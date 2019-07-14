function attachEvents() {
    const btnLoad = document.querySelector('#btnLoad');
    const btnCreate = document.querySelector('#btnCreate');
    const phonebook = document.querySelector('#phonebook');
    const personInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    const httpRequester = {
        get: (url) => {
            return fetch(url);
        },
        post: (url, newPhone) => {
            return fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPhone),
            })
                .then(() => {
                    clearContent(personInput);
                    clearContent(phoneInput);
                })
                .then(() => loadPhonebook());
        },
        delete: function (key) {
            const urlForDelete = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
            fetch(urlForDelete, { method: 'DELETE' });
        }
    }

    const checkServerResponse = (serverResponse) => {
        if (serverResponse.status > 300) {
            window.alert(`Server Error: ${serverResponse.status}`)
            throw new Error(`Server Error: ${serverResponse.status}`)
        }
        return serverResponse;
    }

    const loadPhonebook = () => {
        clearContent(phonebook);
        httpRequester.get(url)
            .then((response) => { return checkServerResponse(response).json() })
            .then((phonebookServer) => {
                if (JSON.stringify(phonebookServer) === 'null') {
                    window.alert('Database is empty!')
                    throw new Error('Database is empty!!! Create an element first.')
                }
                for (const elementFromServer in phonebookServer) {
                    const record = phonebookServer[elementFromServer];
                    const key = elementFromServer;
                    createNewRecord(record, key);
                }
            })
    }

    const inpuToPhonebook = () => {
        const data = {
            person: personInput.value,
            phone: phoneInput.value
        };
        httpRequester.post(url, data);
    }

    const createNewRecord = (newRecordToCreate, key) => {
        const li = createLiElement();

        const span = createSpanElement();
        span.textContent = `${newRecordToCreate.person}: ${newRecordToCreate.phone} `;

        const deleteBtn = createBtnElement();
        deleteBtn.id = 'btnDelete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('data', `${key}`);
        deleteBtn.addEventListener('click', deletRecord);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        phonebook.appendChild(li);
    }

    const createLiElement = () => document.createElement('li');
    const createSpanElement = () => document.createElement('span');
    const createBtnElement = () => document.createElement('button');
    const clearContent = (elementToClear) => {
        elementToClear.innerHTML = '';
        elementToClear.value = '';
    };
    const deletRecord = function () {
        httpRequester.delete(this.getAttribute('data'));
        this.parentElement.remove();
    };
    btnLoad.addEventListener('click', loadPhonebook);
    btnCreate.addEventListener('click', inpuToPhonebook);
}

attachEvents();