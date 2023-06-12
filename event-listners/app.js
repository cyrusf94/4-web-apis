/* 
    ? Event Listeners
    * allows us to execute a callback fx when an event occurs
    * .addEventListener() takes an event and fires a callback
    * event - a string of event that will trigger the callback
    * callback - fx that is triggered immedietly after the event
*/

let listInput = document.getElementById("listInput");

// listInput.addEventListener("keyup", event => {
//     console.log(event.target.value);
// })

/* 
    ? What's happening
    * Event Listener listens for key up event
    * When triggered, we collect event object thru the event
    argument
    * we access the traget element on which the event listner
    was placed
    * We console.log its .value property
*/

let btn = document.getElementById("submit");
let ulToDo = document.getElementById("ulToDo");

btn.addEventListener("click", evt => {
    // prevents default form behavior to send an HTTP request
    evt.preventDefault();
    // ? Easy way to access input element value
    let input = document.getElementById("listInput").value;
    // ? Elegant way to use existing event object to access input
    // evt.target.form[0].value
    console.log("button has been hit", evt)
    // 1. Create an element
    let li = document.createElement("li");
    // 2. assign the value of input post-click to be the value 
    //of  li's text content property
    li.textContent = evt.target.form[0].value;
    // 3. append the list item to the parent container
    ulToDo.appendChild(li);
    // resets placeholder text
    evt.target.form[0].value = ""
})

/* 
    ! Challenge
    * Create a div inside index.html, below the form
    * Create two buttons with + and -
    * Between them create a span tag with a value of 0
    * When plus and minus are clicked, it should change the value of the span tag to increment or decrement it
    * HINT: You can create event listeners on each btn OR
    * you can look into onClick evt listener attribute
*/

let plus = document.getElementById("minus");
let minus = document.getElementById("plus");
let countSpan = document.getElementById("total");
let count = 0;
countSpan.textContent = count;

plus.addEventListener("click", evt => {
    evt.preventDefault();
    count--;
    countSpan.textContent = count;
})

minus.addEventListener("click", evt => {
    evt.preventDefault();
    count++;
    countSpan.textContent = count;
})

// ? OR use attribute event listeners inside .html file