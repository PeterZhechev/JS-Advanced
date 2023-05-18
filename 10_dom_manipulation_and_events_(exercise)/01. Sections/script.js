function create(words) {

   let contentDivElement = document.getElementById('content');
   
   for (let word of words) {
      let currentDivElement = document.createElement('div');
      let currentPElement = document.createElement('p');
      currentPElement.style.display = 'none';
      contentDivElement.addEventListener('click', addPFunc)
      currentPElement.textContent = word;

      contentDivElement.appendChild(currentDivElement);
      currentDivElement.appendChild(currentPElement);

   }
   
   function addPFunc(e) {
      e.target.children[0].style.display = '';
      console.log(e.target.children[0].style.display);
   }
}