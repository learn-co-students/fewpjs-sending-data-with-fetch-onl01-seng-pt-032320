// Add your code here
const submitData = function(name, email) {

    const requestBody = {
        name: name, 
        email: email
    };

    const userForm = document.querySelector("#userForm")

    const  configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(requestBody)
    }; 

    return fetch("http://localhost:3000/users", configObj)
        .then((response) => response.text())
        .then((json) => {
            document.getElementById('output').innerHTML = json;
            
        })
        .catch((error) => {
            document.body.innerHTML = error.message;
        })
}