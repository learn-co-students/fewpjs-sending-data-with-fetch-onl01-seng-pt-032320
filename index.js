// Add your code here
const userUrl = "http://localhost:3000/users";

function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch(userUrl, configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            const newElement = document.createElement("P");
            newElement.innerHTML = object.id;
            document.querySelector("body").append(newElement);
        })
        .catch(function(error) {
            alert("Jinkies! Something went wrong!");
            const newElement = document.createElement("H2");
            newElement.innerHTML = error.message;
            document.querySelector("body").append(newElement);
        })
}