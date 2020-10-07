// Add your code here
// function submitData(name, email) {
//     fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({
//           name: "Steve",
//           email: "steve@steve.com"
//         })
        
//     });
 
        
// };
function submitData(name, email) {
let formData = {
    name: "Steve",
    email: "steve@steve.com"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(userData) {
      console.log(userData);
      const id = userData.id
      let app = document.querySelector("body")
      app.append(id)
    })
    .catch(function(error) {
        let h3 = document.createElement('h3');
        h3.innerHTML = error.message;
        document.body.appendChild(h3);
        console.log(error.message);
    })
    
    
};