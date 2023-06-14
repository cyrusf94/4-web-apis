/* 
        ? URL or URI
        * Uniform Resource Location (Identifier)
        * Address allowing us to access web resources
        
        * DNS (domain name) server resolves the url string into IP address
        
        * http:// || https:// --> protocol type
        * www.google.com --> domain
            * can have subdomains (ex: email.google.com)
            * .com; .de; .pl; .co.uk <-- top level domains
            * domain == IP address (once resolved by DNS) + port == socket
        * Port :80 for HTTP or :443 for HTTPS
        * Path
            * Location and structure of content within a resource
        * Query Parameters
            * map to key-value pairs within an object
            * begin with ?
            * separated by &
            * property assigned to value (ex: ?name=Paul&age=24)
            * usually does not contain " "
        * Anchors (#)
            * id's allowing us to access specific part of a document
            * ex: #footer will take you to an element with that specific id attribute value
*/

/* 
    ? Accessing URL Query Parameters
    * URLSearchPArams interface reads and sanitizes the url
    * we use .get() methods to extrapolate properties
*/
let url = document.location.search; // gives us query params
let params = new URLSearchParams(url); //reads the Location object
console.log(params)
// .get() method extrapolates the values out of the object
let name = params.get("name");
let age = params.get("age");

/* 
    ? Application Programming Interface (API)
    * a way for client to communicate with the server
    * allows for HTTP request and response lifecycle
    * part of a RESTful architecture
    * REST = representational state transfer
    * stateless; cacheable; and layered system allowing reg-res
    lifecycle using:
        * CRUD: create, read, update, and delete
        * HTTP: POST, GET, PUT, DELETE
        * HTTP requests packet sent from client
            * headers
            * body
            * query parameters
        * HTTP response sent from the server:
            * headers
            * payload
            * status code 
*/

/* 
    ? Fetch API
    * is an asychronous function
    * we don't know how long req-res lifecycle will be
    
    ? Process
    * fetch() your resource and return a promise
    * use .then resolver to catch fetchs return and assign to a parameter
    * the parameter is part of Responce interface
    * the body of our response is inaccsessable -- part of
    ReadableStream
    * .json() returns a promise
    * resolve the promise with one more .then() resolver
    * catch the return in a parameter and do whatever with it
*/

let spacexurl = "https://api.spacexdata.com/v3/capsules/past"

fetch(spacexurl)
    .then(Response => {
        Response.json()
        .then(data => console.log(data))


    })
    
// ? Fetch using asynchronous functions

async function getData() {
    try {
        let response = await fetch(spacexurl)
        let data = await response.json()
        console.log(data);
    } catch (err) {
        console.log(err);
    }

}

getData();

// ? JavaScript Object Notation (JSON) --> object in a string format

let myObj = {
    name: "cyrus",
    age: 28
}

// ? Stringifying an object to send it
let jsonString = JSON.stringify(myObj);
console.log(jsonString);

// ? Parsing an object to traverse it
let responseObject = JSON.parse(jsonString);
console.log(responseObject);