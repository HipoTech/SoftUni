function notify(message) {
    const messageBox = document.querySelector('#notification');
    messageBox.textContent = message;
    messageBox.style.display = 'block';

    setTimeout(() => messageBox.style.display = 'none', 2000);

}