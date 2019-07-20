(function () {
    const getVenuesBtn = document.querySelector('#getVenues');
    const venueDate = document.querySelector('#venueDate');
    const vanueInfo = document.querySelector('#venue-info');

    const httpRequester = {
        userAndPasword: 'Z3Vlc3Q6cGFzcw==',
        get: function (id) {
            return fetch(`https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${this.userAndPasword}`,
                }
            });
        },
        postToConfirm: function (qty, id) {
            return fetch(`https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${qty}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${this.userAndPasword}`,
                    "Content-type": "application/json",
                },
            });
        },
        postToGetVenues: function (date) {
            return fetch(`https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${this.userAndPasword}`,
                    "Content-type": "application/json",
                },
            });
        },

    }

    const checkServerResponse = (serverResponse) => {
        if (serverResponse.status > 300) {
            window.alert(`Server Error: ${serverResponse.status}`)
            throw new Error(`Server Error: ${serverResponse.status}`)
        }
        return serverResponse.json();
    }

    const venueTemplateRender = function (venue) {
        const mainConteiner = createDiv();
        mainConteiner.classList = 'venue';
        mainConteiner.id = venue._id;
        // name Span
        const valueNameSpan = createSpan();
        valueNameSpan.classList = 'venue-name';
        valueNameSpan.textContent = `${venue.name}`

        const inputInfo = createInput();
        inputInfo.classList = 'info';
        inputInfo.type = 'button';
        inputInfo.value = 'More info';
        valueNameSpan.appendChild(inputInfo);
        inputInfo.addEventListener('click', showMoreInfo);
        //detail Div
        const detailsDiv = createDiv();
        detailsDiv.classList = 'venue-details';
        detailsDiv.style.display = 'none';
        //table
        const table = createTable();
        //table Head
        const head = createTr();
        const headPrice = createTh();
        headPrice.textContent = 'Ticket Price';
        const headQuantity = createTh();
        headQuantity.textContent = 'Quantity';
        const headempty = createTh();
        head.appendChild(headPrice);
        head.appendChild(headQuantity);
        head.appendChild(headempty);
        // table Body
        const body = createTr();
        const priceData = createTd();
        priceData.classList = 'venue-price';
        priceData.value = `${venue.price} lv`;
        body.appendChild(priceData);
        const quantityTd = createTd();
        const quantitySelect = createSelect();
        quantitySelect.classList = 'quantity';
        const option1 = createOption('1', 1);
        const option2 = createOption('2', 2);
        const option3 = createOption('3', 3);
        const option4 = createOption('4', 4);
        const option5 = createOption('5', 5);
        quantitySelect.appendChild(option1);
        quantitySelect.appendChild(option2);
        quantitySelect.appendChild(option3);
        quantitySelect.appendChild(option4);
        quantitySelect.appendChild(option5);
        quantityTd.appendChild(quantitySelect);
        body.appendChild(quantityTd);
        const tableData = createTd();
        const inputPurchase = createInput();
        inputPurchase.classList = 'purchase';
        inputPurchase.type = 'button';
        inputPurchase.value = 'Purchase';
        tableData.appendChild(inputPurchase);
        inputPurchase.addEventListener('click', function () {
            loadPurchaseSection(venue, this);                // Passing value thru addEventListener
        });
        body.appendChild(tableData);

        table.appendChild(head);
        table.appendChild(body);

        detailsDiv.appendChild(table);

        const headSpan = createSpan();
        headSpan.classList = 'head';
        headSpan.textContent = 'Venue description:';
        detailsDiv.appendChild(headSpan);

        const descriptionP = createP();
        descriptionP.classList = 'description';
        descriptionP.textContent = `${venue.description}`;
        detailsDiv.appendChild(descriptionP);

        const timeP = createP();
        timeP.classList = 'description';
        timeP.textContent = `Starting time: ${venue.startingHour}`;
        detailsDiv.appendChild(timeP);

        mainConteiner.appendChild(valueNameSpan);
        mainConteiner.appendChild(detailsDiv);
        vanueInfo.appendChild(mainConteiner);
    }

    const showMoreInfo = function () {
        const currentElement = this.parentNode.parentNode;
        const elementToShow = currentElement.querySelector('div.venue-details');
        const currantState = elementToShow.style.display;

        if (currantState === 'none') {
            elementToShow.style.display = 'block';
        } else {
            elementToShow.style.display = 'none';
        }

    }

    const renderInfo = function (venue) {

        venueTemplateRender(venue);

    }

    const orderCofirmed = function (quantity, id) {
        httpRequester.postToConfirm(quantity, id)
            .then(serverResponse => checkServerResponse(serverResponse))
            .then((htmlFromServer) => {
                clearContent(vanueInfo);
                return htmlFromServer;
            })
            .then((htmlFromServer) => {
                const message = createP();
                message.textContent = 'You may print this page as your ticket';
                const div = createDiv();
                div.innerHTML = htmlFromServer.html;
                vanueInfo.appendChild(message);
                vanueInfo.appendChild(div);
            })
            .catch(error => console.log(`Error Detected: ${error}`));
    }

    const renderConformationTemplate = function (quantity, venue) {
        clearContent(vanueInfo);

        const headSpan = createSpan();
        headSpan.classList = 'head';
        headSpan.textContent = 'Confirm purchase';
        vanueInfo.appendChild(headSpan);

        const purchaseDiv = createDiv();
        purchaseDiv.classList = 'purchase-info';
        const nameSpan = createSpan();
        nameSpan.textContent = `${venue.name}`
        purchaseDiv.appendChild(nameSpan);
        const infoSpan = createSpan();
        infoSpan.textContent = `${quantity} x ${venue.price}`
        purchaseDiv.appendChild(infoSpan);
        const totalSpan = createSpan();
        totalSpan.textContent = `Total: ${quantity * venue.price} lv`
        purchaseDiv.appendChild(totalSpan);
        const confirmInput = createInput();
        confirmInput.type = 'button';
        confirmInput.value = 'Confirm';
        purchaseDiv.appendChild(confirmInput);
        confirmInput.addEventListener('click', function () {
            orderCofirmed(quantity, venue._id);                 // Passing value thru addEventListener
        });
        vanueInfo.appendChild(purchaseDiv);

    }

    const loadPurchaseSection = function (venue, currentBtn) {
        const currentElement = currentBtn.parentNode.parentNode;
        const quantity = currentElement.querySelector('.quantity').value;
        renderConformationTemplate(quantity, venue);
    }

    const getVenuesInfo = function (venuesIds) {
        venuesIds.forEach(id => {
            httpRequester.get(id)
                .then(serverResponse => checkServerResponse(serverResponse))
                .then(venuesInfo => renderInfo(venuesInfo))
                .catch(error => console.log(`Error Detected: ${error}`));

        });
    }

    const getAllVenues = function () {
        httpRequester.postToGetVenues(venueDate.value)
            .then(serverResponse => checkServerResponse(serverResponse))
            .then(venuesIds => getVenuesInfo(venuesIds))
            .then(() => clearValue(venueDate))
            .catch(error => console.log(`Error Detected: ${error}`));

    }

    const clearContent = (elementToClear) => elementToClear.innerHTML = '';
    const clearValue = (elementToClear) => elementToClear.value = '';

    const createDiv = () => document.createElement('div');
    const createSpan = () => document.createElement('span');
    const createP = () => document.createElement('p');
    const createInput = () => document.createElement('input');
    const createSelect = () => document.createElement('select');
    const createOption = (elementValue, elementContent) => {
        const option = document.createElement('option');
        option.value = elementValue;
        option.textContent = elementContent;

        return option;
    };

    const createTable = () => document.createElement('table');
    const createTr = () => document.createElement('tr');
    const createTh = () => document.createElement('th');
    const createTd = () => document.createElement('td');

    getVenuesBtn.addEventListener('click', getAllVenues)
})()