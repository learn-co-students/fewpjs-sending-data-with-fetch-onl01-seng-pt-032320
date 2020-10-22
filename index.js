// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
    })
        .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            print(object);
          })
          .catch(function(error) {
            document.body.innerHTML += error.message;
        // ✓ handles a failed POST request using catch,

        });
}


   
function print(object) {
    document.body.innerHTML += object.id;
}


//that takes two strings arguments, 
//one representing a user's name 
//and the other representing a user's email.

//✓ makes a POST request to /user with a name and email
// ✓ handles the POST request response,
// retrieves the new id value and appends it to the DOM
// ✓ handles a failed POST request using catch,
// appends the error message to the DOM
