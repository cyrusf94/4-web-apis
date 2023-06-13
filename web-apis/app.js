/* 
    ? Inherent Events
    * anchors
    * buttons
    * forms
    
    * links try and send HTTP request to take us elsewhere
    * buttons listen for a click
    * form tries to send data
*/

const db = [
    { email: "mrpndev@gmail.com", pwd: "dblocal"},
    { email: "melduch@teacher.com", pwd: "ilovecoding"},
    { email: "asen@mars.com", pwd: "damAli3n"},
]

let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', e => {
    e.preventDefault();


    let email = e.target.form[0].value;
    let pwd = e.target.form[1].value;

    let foundUser = db.filter(usr => usr.email === email)


        if (foundUser.length === 0) {
            let h1 = document.createElement('h1');
            h1.textContent = "user not found";
            document.body.appendChild(h1);
        } else {
            if (foundUser[0].pwd === pwd) {
                let h1 = document.createElement("h1");
                h1.textContent = `welcome ${foundUser[0].email}`
                document.body.appendChild(h1)
            } else {
                let h1 = document.createElement('h1');
                h1.textContent = "Incorrect password"
                document.body.appendChild(h1)
            }
        }
});