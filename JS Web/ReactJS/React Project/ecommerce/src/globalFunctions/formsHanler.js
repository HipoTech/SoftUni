const getDataFromForm = (event, element) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
        if (event.target.checked && event.target.value === 'on') {
            element[name] = true;
        } else if (event.target.value === 'on') {
            element[name] = false;
        } else if (event.target.checked) {
            element[name] = event.target.value;
        } else {
            element[name] = ''
        }
    } else {
        element[name] = event.target.value
    }
    console.log(element[name]);

}

export {
    getDataFromForm,

}