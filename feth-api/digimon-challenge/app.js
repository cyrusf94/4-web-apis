/* 
    ! Fetch Challenge
    * utilize resolvers or async fx to fetch all digimons
    * console log them and their properties
    
    ? EASY
    * build a div for each one that will hold their name as h1, and their img
    * fill your body with the names and images of all of the digimons
    * style it appropriately (utilize flexbox)
    
    ? DIFFICULT
    * create a render function
    * it will take a parameter of data
    * it will need to be invoked within the data fetch fx
    * it will render the name, image and for each digimon
*/

let url = "https://digimon-api.vercel.app/api/digimon";
let container = document.getElementById('container')


async function getDigi () {
        let response = await fetch(url);
        let digi = await response.json();
        createDiv(digi)
        }


getDigi();

let createDiv = function(digimon) {
    digimon.forEach(d => {
let div = document.createElement('div');
div.className = "digimon";
let h1 = document.createElement('h1');
h1.className = "name";
h1.textContent = d.name;
div.appendChild(h1)
let img = document.createElement('img')
img.src = d.img
div.appendChild(img);
container.appendChild(div);
});
}