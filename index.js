// Add your code here
  

  function submitData(name_,email_){

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name_,
            email: email_
          })
      };

   return fetch("http://localhost:3000/users", configObj)
   .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let body = document.querySelector("body")
    body.innerHTML = object.id 
  })
  .catch(function(error) {
    alert("Unexpected id returned!");
    let body = document.querySelector("body")
    body.innerHTML = error.message;
  });
}
