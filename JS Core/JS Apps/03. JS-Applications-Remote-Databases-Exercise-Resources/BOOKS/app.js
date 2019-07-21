(function () {

    const booksStorage = document.querySelector('tbody');
    const loadBtn = document.querySelector('#loadBooks');
    const submitForm = document.querySelector('form');

    const submitFormElements = {
        title: document.querySelector('#title'),
        author: document.querySelector('#author'),
        isbn: document.querySelector('#isbn'),
    }

    const checkServerResponse = (serverResponse) => {
        if (serverResponse.status > 300) {
            window.alert(`Server Error: ${serverResponse.status}`)
            throw new Error(`Server Error: ${serverResponse.status}`)
        }
        return serverResponse.json();
    }

    const httpRequester = {
        url: 'https://baas.kinvey.com/appdata/kid_r1U8HJTWS/books',
        get: function () {
            return fetch(this.url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                }
            });
        },
        delete: function (bookId) {
            return fetch(this.url + `/${bookId}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                    "Content-type": "application/json",
                },
            })
        },
        edit: function (bookId, book) {
            return fetch(this.url + `/${bookId}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(book),
            })
        },
        post: function (book) {
            return fetch(this.url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(book),
            });
        },

    }
    //Get All
    const listBooks = () => {
        clearContent(booksStorage);
        return httpRequester.get()
            .then(serverResponse => checkServerResponse(serverResponse))
            .then(booksList => {
                booksList.forEach(book => {
                    addBookToLibrary(book)
                });
            })
            .catch(error => console.log(`Error Detected: ${error}`));
    }
    //Submit
    const addBookToLibrary = function (book) {
        // Title
        const bookTitle = createTd();
        bookTitle.textContent = book.title;
        bookTitle.classList = 'title';
        // Author
        const bookAuthor = createTd();
        bookAuthor.textContent = book.author;
        bookAuthor.classList = 'author';
        // Isbn
        const bookIsbn = createTd();
        bookIsbn.textContent = book.isbn;
        bookIsbn.classList = 'isbn';
        // Action
        const bookAction = createTd();
        //Delete
        const deleteBtn = createBtn();
        deleteBtn.textContent = 'Delete';
        //Edit
        const editBtn = createBtn();
        editBtn.textContent = 'Edit';
        bookAction.appendChild(editBtn);
        bookAction.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', deleteBook)
        editBtn.addEventListener('click', editBook)

        const bookContainer = createTr();
        const bookId = createIdAttribute();
        bookId.value = book._id;
        bookContainer.setAttributeNode(bookId);
        //AppendToMaster
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookIsbn);
        bookContainer.appendChild(bookAction);
        booksStorage.appendChild(bookContainer);
    }

    const submitNewRecord = function (event) {
        const record = {
            title: submitFormElements.title.value,
            author: submitFormElements.author.value,
            isbn: submitFormElements.isbn.value,
        }

        httpRequester.post(record)
            .then(serverResponse => checkServerResponse(serverResponse))
            .then(() => {
                submitFormElements.title.value = '';
                submitFormElements.author.value = '';
                submitFormElements.isbn.value = '';
            })
            .then(() => listBooks())
            .catch((error) => console.log(`Server Error: ${error}`));
        event.preventDefault();
    }
    //Delete
    const deleteBook = function () {
        const bookConteiner = this.parentNode.parentNode;
        const bookId = bookConteiner.getAttribute('elementdbid');
        httpRequester.delete(bookId)
            .then(serverResponse => checkServerResponse(serverResponse))
            .then(() => bookConteiner.remove())
            .catch((error) => console.log(`Server Error: ${error}`));
    }
    //Edit
    const editBook = function () {
        const bookConteiner = this.parentNode.parentNode;
        const title = bookConteiner.querySelector('.title');
        const author = bookConteiner.querySelector('.author');
        const isbn = bookConteiner.querySelector('.isbn');
        appandSubmitEditBtn(this);
        appandEditField(title);
        appandEditField(author);
        appandEditField(isbn);
    }

    const appandSubmitEditBtn = function (editBtn) {
        const bookConteiner = editBtn.parentNode;
        const submitEditBtn = editBtn.cloneNode(true);
        submitEditBtn.addEventListener('click', postEdit);
        bookConteiner.insertBefore(submitEditBtn, editBtn.nextSibling);
        editBtn.style.display = 'none';
    }

    const appandEditField = function (elementNode) {
        if (elementNode.querySelector('input') !== null) {
            elementNode.querySelector('input').remove();
        }
        const field = createInput();
        field.type = 'text';
        field.classList = elementNode.getAttribute('class');
        field.value = elementNode.textContent;
        field.style.width = '150px';
        elementNode.textContent = '';
        elementNode.appendChild(field);

    }

    const postEdit = function () {
        const bookConteiner = this.parentNode.parentNode;
        const elementId = bookConteiner.getAttribute('elementdbid');

        const book = {
            title: bookConteiner.querySelector('.title input').value,
            author: bookConteiner.querySelector('.author input').value,
            isbn: bookConteiner.querySelector('.isbn input').value,
        }
        httpRequester.edit(elementId, book)
            .then(() => listBooks())
            .catch((error) => console.log(`Server Error: ${error}`));
    }

    const createTd = () => document.createElement('td');
    const createInput = () => document.createElement('input');
    const createTr = () => document.createElement('tr');
    const createBtn = () => document.createElement('button');
    const createIdAttribute = () => document.createAttribute('elementDbId');

    const clearContent = (elementToClear) => elementToClear.innerHTML = '';

    loadBtn.addEventListener('click', listBooks);
    submitForm.addEventListener('submit', submitNewRecord);

    listBooks();
})()