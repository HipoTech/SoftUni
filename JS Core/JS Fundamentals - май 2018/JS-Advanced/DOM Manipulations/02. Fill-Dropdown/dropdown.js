function addItem() {
    const text = document.querySelector('#newItemText');
    const valueText = document.querySelector('#newItemValue');
    const menu = document.querySelector('#menu');

    const option = document.createElement('option');

    option.textContent = `${text.value} ${valueText.value}`
    menu.appendChild(option);

    text.value = '';
    valueText.value = '';
}