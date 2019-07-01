function create(words) {
   const createDiv = () => document.createElement('div');
   const createParagraph = () => document.createElement('p');
   const unhide = (ev) => ev.target.querySelector('p').style.display = 'block';

   for (let i = 0; i < words.length; i++) {
      const mainDiv = document.querySelector('#content');
      const divCreate = createDiv();
      const pCreate = createParagraph();
      word = words[i];
      pCreate.textContent = `${word}`;
      divCreate.appendChild(pCreate);
      divCreate.addEventListener('click', unhide);
      mainDiv.appendChild(divCreate);
      pCreate.style.display = 'none';
   }
}