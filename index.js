function submitData(name, email){
    let url = "http://localhost:3000/users";
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
    };
    let params;
    return fetch(url, configObj)
    .then(function(response) { return response.json()})
    .then(obj => {
    params = Object.assign({}, obj);
    const text = document.createTextNode(params.id);
    document.body.appendChild(text);
    })
    .catch(error => {
        const text = document.createTextNode(error.message);
        document.body.appendChild(text);
    });
    
}