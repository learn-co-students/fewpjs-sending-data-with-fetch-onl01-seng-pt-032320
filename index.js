
  function submitData(name, email){
    let formData = {
        name: name,
        email: email //document.getElementById('userEmail').value
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
      .then(function(object) {
          console.log(object);
          document.body.innerHTML = `name: ${object.name}, email: ${object.email}, id: ${object.id}` 
      })
      .catch(function(error) {
        alert("error!");
        document.body.innerHTML = error.message;
      });
    }


submitData("test", "test email")
