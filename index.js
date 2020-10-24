function submitData(name, email) {
  let formData = {
    name,
    email
  }
  
  let formObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", formObj)
    .then((resp) => resp.json())
    .then((obj) => document.body.innerHTML = obj.id)
    .catch((error) => document.body.innerHTML = error.message)
}