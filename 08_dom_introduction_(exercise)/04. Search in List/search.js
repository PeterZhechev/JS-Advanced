function search() {

   const list = document.querySelectorAll('#towns li');
   let matches = 0;
   let input = document.getElementById('searchText').value;

   for (let line of list) {

      line.style.fontWeight = "normal";
      line.style.textDecoration = "none";
   }

   for (let line of list) {

      let currentWord = line.innerHTML;

      if (currentWord.includes(input) && input !== '') {
         line.style.fontWeight = "bold";
         line.style.textDecoration = "underline";
         matches++;
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;

   document.getElementById('searchText').value = '';
   matches = 0;
}
