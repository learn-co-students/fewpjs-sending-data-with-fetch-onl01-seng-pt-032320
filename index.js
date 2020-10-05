// Add your code here
let formData = {
    name: "Nabil Hayet",
    email: "nabil4457@yahoo.com"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  function submitData(name,email){
   return fetch("http://localhost:3000/users", configObj);
   .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let body = document.querySelector("body")
    let newLi = document.createElement("li")
    newLi.innerText = object.id 
    body.appendChild(newLi)
  })
  .catch(function(error) {
    alert("Unexpected id returned!");
    console.log(error.message);
  });
}
