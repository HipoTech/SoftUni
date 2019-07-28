(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        const determinateElement = function (ctx) {
            const btns = document.querySelectorAll('.showBtn');
            btns.forEach(btn => {
                btn.addEventListener('click', showStatus)
            });

        }

        const showStatus = function () {
            const statusToShow = this.parentNode
                .querySelector('.status')
                .style.display
            if (statusToShow === 'none') {
                this.parentNode.querySelector('.status').style.display = 'block'
            } else {
                this.parentNode.querySelector('.status').style.display = 'none'
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
            const root = document.querySelector('#allCats ul');
            const compileed = Handlebars.compile(source);
            const rendered = compileed({ cats });
            root.innerHTML = rendered;
        }
    }


})()
