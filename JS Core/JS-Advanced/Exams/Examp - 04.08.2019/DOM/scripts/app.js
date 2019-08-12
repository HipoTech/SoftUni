function solve() {
    const title = [...document.querySelectorAll('input')].filter(x => x.placeholder === "Add Title");
    const year = [...document.querySelectorAll('input')].filter(x => x.placeholder === "Add Year");
    const price = [...document.querySelectorAll('input')].filter(x => x.placeholder === "Add Price");
    const newBook = document.querySelector('#outputs').firstElementChild.nextElementSibling.lastElementChild;
    const oldBook = document.querySelector('#outputs').firstElementChild.lastElementChild;
    const total= document.querySelectorAll('h1')[1];
    
    const btnAdd = document.querySelector('button');
    let sum = 0;
    let buyed = 0;


    const addBook = function (event) {
        event.preventDefault()


        if (title[0].value !== '' && +year[0].value >= 0 && +price[0].value >= 0) {

            const div = document.createElement('div');
            div.classList = 'book';

            const p = document.createElement('p');
            p.textContent = `${title[0].value} [${Number(year[0].value).toFixed(0)}]`

            const buton = document.createElement('button');
            buton.textContent = `Buy it only for ${Number(price[0].value).toFixed(2)} BGN`;
            buton.setAttribute('price',`${Number(price[0].value).toFixed(2)}`)

            const butonOld = document.createElement('button');
            butonOld.textContent = `Move to old section`;

            div.appendChild(p);
            div.appendChild(buton);
            div.appendChild(butonOld);

            newBook.appendChild(div)


            const buy =function (ctx) {
                
                
                sum += (Number(ctx.target.getAttribute('price'))).toFixed(2);
                total.textContent = `Total Store Profit: ${sum} BGN`;
                
                ctx.target.parentElement.remove();
                
            }

            const old =function (ctx) {
                sum += (Number(ctx.target.getAttribute('price'))*0.85).toFixed(2);
                total.textContent = `Total Store Profit: ${sum} BGN`;
                const element = ctx.target.parentElement;
                
                oldBook.appendChild(element);
                ctx.target.remove();
                
            }

            buton.addEventListener('click', buy)
            butonOld.addEventListener('click', old)

        }




    }
    btnAdd.addEventListener('click', addBook)

}