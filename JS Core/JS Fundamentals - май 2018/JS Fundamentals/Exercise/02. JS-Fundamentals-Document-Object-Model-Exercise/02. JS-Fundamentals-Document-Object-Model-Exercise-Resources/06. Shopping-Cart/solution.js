function solve() {
   let addBtns = document.querySelectorAll('.add-product');
   let cart = document.querySelectorAll('textarea');
   let checkoutBtn = document.querySelectorAll('.checkout');
   let total = 0;
   let list = new Set;
   for (let i = 0; i < addBtns.length; i++) {
      addBtns[i].addEventListener('click', addToCart);
   }
   console.log();

   checkoutBtn[0].addEventListener('click', checkout);

   function addToCart() {
      let currentProduct = this.parentNode.parentNode.children;
      let price = Number(currentProduct[3].textContent);
      let name = currentProduct[1].children[0].textContent;
      cart[0].value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      total += Number(price);
      list.add(name);
   }

   function checkout() {
      let products = Array.from(list);
      cart[0].value += `You bought ${products.join(', ')} for ${total.toFixed(2)}.\n`
      for (let i = 0; i < addBtns.length; i++) {
         addBtns[i].removeEventListener('click', addToCart);
      }
      checkoutBtn[0].removeEventListener('click', checkout);
   }
}