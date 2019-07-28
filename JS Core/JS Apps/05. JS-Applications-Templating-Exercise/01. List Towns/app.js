const listTowns = function () {
    const loadBtn = document.querySelector('#btnLoadTowns');

    const loadTowns = function () {
        const townList = [...document.querySelector('#towns').value
            .split(', ')
            .map((e) => {
                return { name: e }
            })]

        fetch('./template.hbs')
            .then(response => response.text())
            .then((data) => {
                let source = data;
                renderTemplate(source);
            })
            .catch((error) => {
                console.log(error);
            });

        const renderTemplate = function (source) {
            const root = document.querySelector('#root ul');
            const compileed = Handlebars.compile(source);
            const rendered = compileed({ townList });
            root.innerHTML = rendered;
        }
    }

    loadBtn.addEventListener('click', loadTowns);
}()