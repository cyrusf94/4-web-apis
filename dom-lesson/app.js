/* 
    ? Document Object Model (DOM)
    * data representation of the objects comprising the structure
    and content of a document on the web

    ? Basic Structure:
    * Document
        * HTML
            * Meta tags
            * Links tags
            * Title tags
            * ...and all of its content (text, attributes, comments)
        * Body 
            * Nav 
            * Header
            * h1s, imgs, asides, divs and so on...
            * ...and all of their attributes and values       
*/

console.log(typeof document); //  returns object
console.dir(document);

/* 
    ? Window vs Document vs Navigator vs History Objects
    * document allows access to the index.html file
    * window allows access to the browser object
    * navigator allows access to the indentity of user agent 
    * history allows us to navigate the page
*/
console.log(window);

let userName = "Paul";
console.log(userName);

// can access vars from global scope
var user = "Paul";


// ? Create our first element using DOM

/*  1. use .createElement() method on a DOM object and pass an
    argument element we want to create
    2. assign it to a variable for storage and modification
*/
let h1 = document.createElement("h1");
/* 
    3. modify the elements textContent property to render "DOM" Lesson
*/
h1.textContent = "DOM Lesson"
h1.style.color = "blue"
console.log(h1);
// 4. Find an element to which you want to append your newly created element
console.dir(document.body);
// 5. Append the element we created and modify to its parent element
document.body.appendChild(h1);

/* 
    ? Accessing DOM elements
    * Elements can be accessed in severel different ways
    common are:
        * getElementById()
        * getElementByClassName() [HTML Collection]
        * getELementByTagName() [HTML Collection]
        * querySelector()
        * querySelector(ALL) [NodeLIst]
*/

/* 
    ? .getELementById()
    * returns first instance of id element
*/

let ulToDo = document.getElementById("ulToDo");
console.log(ulToDo);

/* 
    ? .getElementsByClassName()
    * returns an HTML Collection of class instances
    * array-like object (cannot use array methods)
    * allows access to index and length
*/

let listItem = document.getElementsByClassName("listItem");
console.log(listItem);

console.log(listItem[0]); // index access

// cannot use array methods like listItem.forEach()

// ? Array-like object can be looped through

for (i of listItem) {
   // i.stlye.color = "red"
    console.log(i);
}

/* 
    ? .getElementByTagName()
    * returns all instances of an element
*/

let allLargeHeaders = document.getElementsByTagName("h1");
console.log(allLargeHeaders);

for (i of allLargeHeaders) {
    console.log(i);
    i.style.color = "red"
}

/* 
    ? .querySelector()
    * returns the first instance of an element 
    * access using tag name, id, and class name
    * MUST SPECIFY whether its a tag, ., or #
    * ex. "nav" for element, ".nav" for class, "#nav" for id
*/

let listItemByQuerySelector = document.querySelector(".listItem");
console.log(listItemByQuerySelector);

/* 
    ? .querySelectorAll()
    * returns a NodeList of all instances of class, id or element
    * allows the use of array methods to iterate over
*/
let listItemsByQuerySelectorAll = document.querySelectorAll(".listItem");
console.log(listItemsByQuerySelectorAll);

listItemsByQuerySelectorAll.forEach(i => i.style.listStleType = "upper-roman");

let li = document.createElement("li");
li.textContent = "clean bedroom";
li.class = "listItem";
li.style.color = "blue";
let list = document.querySelector("#ulToDo");
// ? Access using immediate parent definition
list.appendChild(li);

/* 
    ? HTML Collection vs NodeList
    * HTML Collection returns a list that is live
    * Live Lists DO show newly created elements
    
    * NodeList returns a static list of elements
    * NodeLists DO NOT show newly created elements
*/

// ? Access using two different methods
let htmlCollection = document.getElementsByClassName("listItem");
let nodeList = document.querySelectorAll(".listItem");
console.log("HTML COLLECTION", htmlCollection, "NODE LIST", nodeList);

// ? Item creation
let newItem = document.createElement("li");
newItem.textContent = "New item";
newItem.className = "listItem";

// ?  Appending item
ulToDo.appendChild(newItem);

// ? NodeList will only update hard-coded element styles
// for (i of nodeList) {
//     i.style.color = "red";
// }

// ? HTML Collection will update all element styles, even post-access
for (i of htmlCollection) {
    i.style.color = "blue";
}



