function toggle() {
    const text = document.querySelectorAll('#accordion div')[1];
    let btn = document.querySelector('.button');
    console.log(btn);

    if (btn.textContent === 'More') {
        btn.textContent = 'Less';
        text.style.display = 'block';
    } else if (btn.textContent === 'Less') {
        btn.textContent = 'More';
        text.style.display = 'none';
    }
}