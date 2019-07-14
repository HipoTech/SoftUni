function attachEvents() {

    const location = document.querySelector('#location');
    const submitBtn = document.querySelector('#submit');
    const forecast = document.querySelector('#forecast');
    const upcoming = document.querySelector('#upcoming');
    const content = document.querySelector('#content');
    const currentForecastConteiner = document.querySelector('#current');
    const url = 'https://judgetests.firebaseio.com/locations.json';

    const httpRequester = {
        get: (url) => {
            return fetch(url);
        },
    }

    const checkServerResponse = (serverResponse) => {
        if (serverResponse.status > 300) {
            window.alert(`Server Error: ${serverResponse.status}`)
            throw new Error(`Server Error: ${serverResponse.status}`)
        }
        return serverResponse;
    }

    const locationNotFound = () => {
        forecast.style.display = 'none';
        const errorConteiner = createH1Element();
        errorConteiner.textContent = `Error! Location not found`;
        content.appendChild(errorConteiner);
    }

    const checkLocation = (arrayRespone) => {
        let foundLocation = false;
        arrayRespone.forEach(locationFromServer => {
            if (locationFromServer.name === location.value) {
                foundLocation = true;
                let code = locationFromServer.code;
                getToday(code);
                getUpcomming(code);
            }
        });
        if (!foundLocation) {
            locationNotFound();
        }
    }

    const getToday = (code) => {
        let urlForcastToday = `https://judgetests.firebaseio.com/forecast/today/${code}.json`
        httpRequester.get(urlForcastToday)
            .then((serverRespond) => checkServerResponse(serverRespond))
            .then((response) => response.json())
            .then((serverRespone) => {
                ceateTodayForcast(serverRespone);
            })
    }

    const resetSession = () => {
        let elementsToRemove = [...document.getElementsByClassName('forecasts')];
        if (elementsToRemove.length > 0) {
            const elementToRemoveToday = document.querySelector('.forecasts');
            elementToRemoveToday.remove()
        }

        elementsToRemove = [...document.getElementsByClassName('upcoming')];
        if (elementsToRemove.length > 0) {
            const elementToRemoveUpcoming = document.querySelector('.forecast-info');
            elementToRemoveUpcoming.remove()
        }
    }

    const getUpcomming = (code) => {
        let urlForcastUpcomming = `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`
        httpRequester.get(urlForcastUpcomming)
            .then((serverRespond) => checkServerResponse(serverRespond))
            .then((response) => response.json())
            .then((serverRespone) => {
                ceateUpcommingForEcast(serverRespone);
            })
    }

    const sendLocation = () => {
        resetSession();
        let code = '';
        const serverRespond = httpRequester.get(url);
        checkServerResponse(serverRespond)
            .then((response) => response.json())
            .then((serverRespone) => {
                code = checkLocation(serverRespone);
            });
    }

    const ceateTodayForcast = (serverRespone) => {
        const conditionToday = serverRespone.forecast.condition;
        let weatherSymbol = 'Error: todays weather check tomorow'
        switch (conditionToday) {
            case 'Sunny':
                weatherSymbol = '&#x2600';
                break;
            case 'Partly sunny':
                weatherSymbol = '&#x26C5';
                break;
            case 'Overcast':
                weatherSymbol = '&#x2601';
                break;
            case 'Rain':
                weatherSymbol = '&#x2614';
                break;
            case 'Degrees':
                weatherSymbol = '&#176';
                break;

            default:
                break;
        }
        const divForecast = createDivElement();
        divForecast.classList = 'forecasts';

        const spanForSimbol = createSpanElement();
        spanForSimbol.innerHTML = weatherSymbol;
        spanForSimbol.classList = 'condition symbol';

        const spanForData = createSpanElement();
        spanForData.classList = 'condition';

        const spanForName = createSpanElement();
        spanForName.textContent = serverRespone.name;
        spanForName.classList = 'forecast-data';

        const spanForThemp = createSpanElement();
        spanForThemp.innerHTML = `${serverRespone.forecast.low}&#176 / ${serverRespone.forecast.high}&#176`;
        spanForThemp.classList = 'forecast-data';

        const spanForContition = createSpanElement();
        spanForContition.textContent = serverRespone.forecast.condition;
        spanForContition.classList = 'forecast-data';


        divForecast.appendChild(spanForSimbol);
        spanForData.appendChild(spanForName);
        spanForData.appendChild(spanForThemp);
        spanForData.appendChild(spanForContition);
        divForecast.appendChild(spanForData);
        currentForecastConteiner.appendChild(divForecast);

        forecast.style.display = 'block';
    }

    const ceateUpcommingForEcast = (serverRespone) => {

        const divForecast = createDivElement();
        divForecast.classList = 'forecast-info';

        serverRespone.forecast.forEach(forecastDaly => {

            const conditionToday = forecastDaly.condition;
            let weatherSymbol = 'Error: todays weather check tomorow'
            switch (conditionToday) {
                case 'Sunny':
                    weatherSymbol = '&#x2600';
                    break;
                case 'Partly sunny':
                    weatherSymbol = '&#x26C5';
                    break;
                case 'Overcast':
                    weatherSymbol = '&#x2601';
                    break;
                case 'Rain':
                    weatherSymbol = '&#x2614';
                    break;
                case 'Degrees':
                    weatherSymbol = '&#176';
                    break;

                default:
                    break;
            }

            const spanForData = createSpanElement();
            spanForData.classList = 'upcoming';

            const spanForSimbol = createSpanElement();
            spanForSimbol.innerHTML = weatherSymbol;
            spanForSimbol.classList = 'symbol';

            const spanForThemp = createSpanElement();
            spanForThemp.innerHTML = `${forecastDaly.low}&#176 / ${forecastDaly.high}&#176`;
            spanForThemp.classList = 'forecast-data';

            const spanForContition = createSpanElement();
            spanForContition.textContent = forecastDaly.condition;
            spanForContition.classList = 'forecast-data';

            spanForData.appendChild(spanForSimbol);
            spanForData.appendChild(spanForThemp);
            spanForData.appendChild(spanForContition);
            divForecast.appendChild(spanForData);
        });

        upcoming.appendChild(divForecast);
        forecast.style.display = 'block';

    }

    const createDivElement = () => document.createElement('div');
    const createSpanElement = () => document.createElement('span');
    const createH1Element = () => document.createElement('h1');
    submitBtn.addEventListener('click', sendLocation)

}

attachEvents();