function solve() {
   let userInput = document.querySelector('#searchField');
   let rows = document.querySelectorAll('tbody tr');
   let search = document.querySelector('#searchBtn');

   search.addEventListener('click', searchRows);

   function searchRows() {
      let searchFor = userInput.value;

      for (let i = 0; i < rows.length; i++) {
         rows[i].className = 'searchIt';
         let data = document.querySelectorAll('.searchIt td');
         let flag = false;
         for (let j = 0; j < data.length; j++) {
            if (data[j].textContent.includes(searchFor)) {
               flag = true;
            }

         }
         if (flag) {
            rows[i].className = 'select';
         } else {
            rows[i].removeAttribute('class')
         }
      }
   }
}