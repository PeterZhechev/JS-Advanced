function solve() {
   let productsElements = document.querySelector('.shopping-cart');
   productsElements.addEventListener('click', addFunc);
   let totalPrice = 0;
   let allProducts = new Set();
   let allProductsArr = [];
   let textAreaElement = document.querySelector('body > div > textarea');
   let checkoutElement = document.querySelector('.checkout');
   checkoutElement.addEventListener('click', checkoutFunc);

   function addFunc(e) {

      if (e.target.className == 'add-product') {
         let parentElementDiv = Array.from(e.target.parentElement.parentElement.children);
         let currentPrice = 0;
         let currentProductName = '';

         for (let el of parentElementDiv) {

            if (el.className == 'product-line-price') {
               currentPrice = Number(el.textContent);
               totalPrice += Number(currentPrice);
               console.log(currentPrice);
            }

            if (el.className == 'product-details') {
               let currentParentEl = Array.from(el.children);
               for (let el2 of currentParentEl) {
                  if (el2.className == 'product-title') {
                     currentProductName = el2.textContent;
                     allProducts.add(currentProductName);
                     console.log(currentProductName);
                  }
               }
            }
         }

         textAreaElement.value += `Added ${currentProductName} for ${(currentPrice).toFixed(2)} to the cart.\n`;

      }
   }

   function checkoutFunc() {
      for (let product of allProducts) {
         allProductsArr.push(product);
      }

      textAreaElement.value += `You bought ${allProductsArr.join(', ')} for ${(totalPrice).toFixed(2)}.`
      productsElements.removeEventListener('click', addFunc);
      checkoutElement.removeEventListener('click', checkoutFunc);

   }
}