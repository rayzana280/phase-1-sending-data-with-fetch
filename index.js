// Add your code here
function submitData(username, email){
    const formatData = {
        name: username,
        email: email
    };
    const setObject = {
        method: 'POST',
        body: JSON.stringify(formatData),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };
    return fetch('http://localhost:3000/users', setObject)
        .then(response => response.json())
        .then(data => {
            const newElement = document.createElement('h1')
            newElement.innerHTML = String(data.id);
            document.body.appendChild(newElement)
        })
        .catch(error => {
            const newElement = document.createElement('h1')
            newElement.innerHTML = error.message
            document.body.appendChild(newElement)
        })
}

submitData();