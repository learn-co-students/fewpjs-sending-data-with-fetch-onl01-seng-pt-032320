// Add your code here
function submitData() {
let formData = { name: "Steve", email: "steve@steve.com" };  

let configObj = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
  body: JSON.stringify(formData)
};

let theFetch = fetch("http://localhost:3000/users", configObj)
  .then(function(response) { return response.json(); })
  .then(function(object) {
    let paraG = document.createElement("div");
    paraG.innerHTML = object.id
    document.body.appendChild(paraG); })
  .catch(function(error) { 
    let theError = document.createElement("div");
    theError.innerHTML = error.message;
    document.body.appendChild(theError);
  });

return theFetch;
}


  // .catch(function(error) { // the catch() function is used to report errors when something goes wrong
  //  alert("Bad things! Ragnarők!");
  //  console.log(error.message);
  // });
