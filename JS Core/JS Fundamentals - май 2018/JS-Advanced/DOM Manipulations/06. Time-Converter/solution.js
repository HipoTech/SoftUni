function attachEventsListeners() {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    function convert(nodeElement) {
        const valueToConvert = this.previousElementSibling.value;
        const source = this.previousElementSibling.getAttribute('id');
        switch (source) {
            case 'days':
                hours.value = valueToConvert * 24;
                minutes.value = valueToConvert * 24 * 60;
                seconds.value = valueToConvert * 24 * 60 * 60;
                break;
            case 'hours':
                days.value = valueToConvert / 24;
                minutes.value = valueToConvert * 60;
                seconds.value = valueToConvert * 60 * 60;
                break;
            case 'minutes':
                days.value = valueToConvert / (24 * 60);
                hours.value = valueToConvert / 60;
                seconds.value = valueToConvert * 60;
                break;
            case 'seconds':
                days.value = valueToConvert / (24 * 60 * 60);
                hours.value = valueToConvert / (60 * 60);
                minutes.value = valueToConvert / 60;
                break;
            default:
                break;
        }



    }

    let btns = [...document.querySelectorAll('input')]
        .filter((x) => x.getAttribute('type') === 'button')
        .forEach(btn => {
            btn.addEventListener('click', convert);
        })

    console.log(btns);

}