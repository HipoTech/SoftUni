function attachEvents() {
    const createDiv = () => document.createElement('div');
    const createLabel = () => document.createElement('label');
    const createInput = () => document.createElement('input');
    const createHr = () => document.createElement('hr');
    const createButton = () => document.createElement('button');

    const conteier = {
        mainCatch: document.querySelector('#catches'),
    }

    const btn = {
        load: document.querySelector('button.load'),
        add: document.querySelector('button.add'),
        update: document.querySelector('button.update'),
        delete: document.querySelector('button.delete'),
    }

    const url = {
        getOrPost: 'https://fisher-game.firebaseio.com/catches.json',
    }

    const httpRequester = {
        get: () => {
            return fetch(url.getOrPost);
        },
        post: function (newCatch) {
            return fetch(url.getOrPost, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCatch),
            })
        },
        update: function (body, key) {
            return fetch(`https://fisher-game.firebaseio.com/catches/${key}.json`, {
                method: 'PUT',
                body: JSON.stringify(body)
            });

        },
        delete: function (key) {
            return fetch(`https://fisher-game.firebaseio.com/catches/${key}.json`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }

    const createField = (labelName, type, classOfElement, data, container) => {
        label = createLabel();
        label.textContent = `${labelName}`;
        const input = createInput();
        const hr = createHr();
        input.value = `${data}`;
        input.classList = `${classOfElement}`;
        input.type = `${type}`;
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(hr);
    }

    const createData = function () {
        const input = {
            angler: document.querySelector('#addForm .angler').value,
            weight: document.querySelector('#addForm .weight').value,
            species: document.querySelector('#addForm .species').value,
            location: document.querySelector('#addForm .location').value,
            bait: document.querySelector('#addForm .bait').value,
            captureTime: document.querySelector('#addForm .captureTime').value,
        }
        httpRequester.post(input)
            .then(() => loadAllCatches())
            .then(() => clearFields());
    }

    const updateData = function () {
        const mainCatch = this.parentNode;
        const currentKey = mainCatch.getAttribute('data-id');
        const currentCatch = {
            angler: mainCatch.querySelector('.angler').value,
            weight: mainCatch.querySelector('.weight').value,
            species: mainCatch.querySelector('.species').value,
            location: mainCatch.querySelector('.location').value,
            bait: mainCatch.querySelector('.bait').value,
            captureTime: mainCatch.querySelector('.captureTime').value,
        }
        httpRequester.update(currentCatch, currentKey)
            .then(() => loadAllCatches());
    }

    const deleteData = function () {
        const currentKey = this.parentNode.getAttribute('data-id');
        httpRequester.delete(currentKey)
            .then(() => loadAllCatches());
    }

    const importToPage = (catchId, catchData) => {

        const div = createDiv();
        div.classList = 'catch';
        div.setAttribute('data-id', `${catchId}`);

        createField('Angler', 'text', 'angler', `${catchData.angler}`, div);
        createField('Weight', 'number', 'weight', `${catchData.weight}`, div);
        createField('Species', 'text', 'species', `${catchData.species}`, div);
        createField('Location', 'text', 'location', `${catchData.location}`, div);
        createField('Bait', 'text', 'bait', `${catchData.bait}`, div);
        createField('CaptureTime', 'number', 'captureTime', `${catchData.captureTime}`, div);

        // Buttons //
        const updateBtn = createButton();
        updateBtn.classList = 'update';
        updateBtn.textContent = 'Update';
        updateBtn.addEventListener('click', updateData);

        const deleteBtn = createButton();
        deleteBtn.classList = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteData);


        div.appendChild(updateBtn);
        div.appendChild(deleteBtn);

        conteier.mainCatch.appendChild(div);
    }

    const refreshContent = () => {
        conteier.mainCatch.innerHTML = '';
    }

    const clearFields = () => {
        document.querySelector('#addForm .angler').value = ''
        document.querySelector('#addForm .weight').value = ''
        document.querySelector('#addForm .species').value = ''
        document.querySelector('#addForm .location').value = ''
        document.querySelector('.bait').value = ''
        document.querySelector('#addForm .captureTime').value = ''
    }

    const loadAllCatches = () => {
        refreshContent();
        httpRequester.get()
            .then((response) => response.json())
            .then(catchesFromServer => {
                for (const catchData in catchesFromServer) {
                    importToPage(catchData, catchesFromServer[catchData]);
                }
            })
            .catch(error => console.log(error))
    }

    btn.load.addEventListener('click', loadAllCatches);
    btn.add.addEventListener('click', createData);

}
attachEvents();