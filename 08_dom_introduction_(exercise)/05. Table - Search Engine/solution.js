function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector('#searchField');
      let items = Array.from(document.querySelectorAll('.container > tbody > tr'));

      for (let item of items) {
         // console.log(item.textContent);
         if (item.textContent.includes(input.value) && input.value !== '') {
            item.className = 'select';
         } else {
            item.classList.remove('select');
         }
      }

      input = document.querySelector('#searchField').value = '';
   }
}