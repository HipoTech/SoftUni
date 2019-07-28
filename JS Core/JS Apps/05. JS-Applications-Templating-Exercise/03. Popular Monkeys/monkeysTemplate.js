(() => {
    const determinateElement = function (ctx) {
        const btns = document.querySelectorAll('button');
        btns.forEach(btn => {
            btn.addEventListener('click', showStatus)
        });

    }

    const showStatus = function () {
        const statusToShow = this.parentNode
            .querySelector('p')
            .style.display
        if (statusToShow === 'none') {
            this.parentNode.querySelector('p').style.display = 'block'
        } else {
            this.parentNode.querySelector('p').style.display = 'none'
        }

    }
    fetch('template.hbs')
        .then(response => response.text())
        .then((data) => {
            let source = data;
            renderTemplate(source);
        })
        .then(() => determinateElement())
        .catch((error) => {
            console.log(error);
        });

    const renderTemplate = function (source) {
        const root = document.querySelector('.monkeys');
        const compileed = Handlebars.compile(source);
        const rendered = compileed({ monkeys });
        root.innerHTML = rendered;
    }
})()