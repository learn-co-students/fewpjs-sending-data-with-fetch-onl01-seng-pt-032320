// Add your code here

document.addEventListener('DOMContentLoaded', function() {
    console.log("HELLLOO")
});


function submitData(name, email) {

    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify( {
            name, email
        })
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            //puts id on the dom
            let body = document.querySelector('body')
            body.append(object.id)
        })
        .catch(function(error) {
            //puts error message on the dom
            //console.log(error.message);
            let body = document.querySelector('body')
            body.append(error.message)
        })
}

// let formData = {
//     name: "Byron",
//     email: "Poodle"
//   };

  //can write it this way too

//   fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });