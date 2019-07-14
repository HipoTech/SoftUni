function solve() {

    let convertBtn = document.querySelectorAll('#container button')[0];
    let toList = document.querySelectorAll('#selectMenuTo')[0];
    let optionToList = document.querySelector('#selectMenuTo option');
    let inputOfUser = document.querySelector('#input');
    let result = document.querySelector('#result');

    addElementToList('binary', 'Binary');
    addElementToList('hexadecimal', 'Hexadeicmal');

    function addElementToList(valueOfNewProp, contentOfNewProp) {
        let newElement = optionToList.cloneNode(true);
        newElement.value = `${valueOfNewProp}`;
        newElement.textContent = `${contentOfNewProp}`;
        toList.appendChild(newElement);
    }

    convertBtn.addEventListener('click', convert);

    function convert() {
        if (toList.value === 'binary') {
            convertBinary(inputOfUser.value)
        } else if (toList.value === 'hexadecimal') {
            convertHexadeicmal(inputOfUser.value)
        }
    }

    function convertBinary(userValue) {
        let binary = parseInt(userValue, 10);
        result.value = binary.toString(2);
    }

    function convertHexadeicmal(userValue) {
        result.value = Math.abs(userValue).toString(16).toUpperCase();
    }
}