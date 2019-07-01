function solve(selector) {
    const firstElement = document.querySelector(selector);

    (function deep(element) {
        if (element.hasChildNodes()) {
            element.className += ' highlight';
            deep(Array.from(element.childNodes)
                .sort((a, b) => b.childNodes.length - a.childNodes.length)[0]);

        }
    })(firstElement)
}

solve('#content');