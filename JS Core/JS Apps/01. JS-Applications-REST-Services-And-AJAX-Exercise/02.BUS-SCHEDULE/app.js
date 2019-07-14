function solve() {
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    const infoBox = document.querySelector('#info .info');
    let busStop = 'depot';

    const appendResponse = function (serverResponse) {
        serverResponse.json()
            .then((objectFromServer) => {
                busStop = objectFromServer.next;
                if (busStop === undefined) {
                    errorThrown();
                    throw new Error('Incorrect busStop');
                }
            })
            .then(() => {
                departBtn.setAttribute('disabled', 'true');
                arriveBtn.removeAttribute('disabled');
                infoBox.textContent = `Next stop ${busStop}`
            })
    }

    const errorThrown = function () {
        arriveBtn.setAttribute('disabled', 'true');
        departBtn.setAttribute('disabled', 'true');
        infoBox.textContent = `Error`;
        return;
    }

    const checkServerStatus = function (serverResponse) {
        if (serverResponse.status !== 200) {
            errorThrown();
            throw new Error(`Server Error: ${serverResponse.status}`);
        } else {
            appendResponse(serverResponse);
        }
    }

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${busStop}.json`)
            .then((serverResponse) => checkServerStatus(serverResponse));
    }

    function arrive() {
        arriveBtn.setAttribute('disabled', 'true');
        departBtn.removeAttribute('disabled');
        infoBox.textContent = `Arriving at ${busStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();