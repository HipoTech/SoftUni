function getInfo() {
    const stopIdInput = document.querySelector('#stopId');
    const nameOfBusStop = document.querySelector('#stopName');
    const busList = document.querySelector('#buses');

    const resetBusList = function () {
        busList.innerHTML = '';
    }

    const createListItem = function () {
        return document.createElement('li');
    }

    const checkStatus = function (serverResponse) {
        if (serverResponse.status !== 200) {
            appendResponse(serverResponse.status);
        } else {
            serverResponse.json()
                .then((jsonObject) => appendResponse(jsonObject));
        }
    }

    const appendResponse = function (jsonObject) {
        if (typeof jsonObject !== "number") {
            nameOfBusStop.textContent = jsonObject.name
            const busses = jsonObject.buses;
            for (const busId in busses) {
                const li = createListItem();
                const time = busses[busId];
                li.textContent = `Bus ${busId} arrives in ${time}`;
                busList.appendChild(li);
            }
        } else {
            nameOfBusStop.textContent = 'Error';
        }
    }

    resetBusList();
    fetch(`https://judgetests.firebaseio.com/businfo/${stopIdInput.value}.json`)
        .then((serverResponse) => checkStatus(serverResponse));

}