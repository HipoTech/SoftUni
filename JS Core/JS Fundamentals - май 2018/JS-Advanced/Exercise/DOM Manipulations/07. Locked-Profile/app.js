function lockedProfile() {
    function checkState(target) {
        const selecktedElement = target.parentElement;
        const state = [...selecktedElement.querySelectorAll('input')]
            .filter(x => x.type === 'radio' && x.checked === true)[0].value;
        const elementToShowOrHide = selecktedElement.querySelector('div');
        showOrHide(elementToShowOrHide, state, target);
    }

    function showOrHide(elementToShowOrHide, state, target) {
        const btn = target;

        if (state === 'unlock') {
            if (btn.textContent === 'Hide it') {
                elementToShowOrHide.style.display = ''
                btn.textContent = 'Show more'
            } else {
                console.log(elementToShowOrHide);

                elementToShowOrHide.style.display = 'block'
                btn.textContent = 'Hide it'
            }
        }
    }
    function action() {
        checkState(this);
    }

    const btns = [...document.querySelectorAll('button')];
    btns.forEach(btn => {
        btn.addEventListener('click', action)
    });
}