function solve() {
    let btn = document.querySelector('button');
    let input = document.querySelector('input');
    btn.addEventListener('click', addName);

    function addName() {
        let name = input.value.split('');
        let firstLetter = name[0].charAt(0).toUpperCase().charCodeAt(0); //65--90
        name = name.map((e) => e.toLowerCase());
        name[0] = name[0].toUpperCase();
        name = name.join('');
        let listPosition = document.querySelector(`ol li:nth-child(${firstLetter-64})`)
        if (listPosition.textContent === '') {
            listPosition.textContent = name;
        } else {
            listPosition.textContent += `, ${name}`;
        }
        input.value = '';
    }
}