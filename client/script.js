let form = document.getElementById('myForm');
const searchSection = document.getElementById('search-section')
const searchInput = document.getElementById('search')
const searchButton = document.getElementById('search-button')
const searchMessage = document.getElementById('search-message')

// prevent form from submitting
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // get the data from the form
    let formData = new FormData(form);
    let username = formData.get('username');
    let password = formData.get('password');

    console.log('username: ' + username);
    console.log('password: ' + password);

    // make a fetch request to our server
    login(username, password);
});

function login(username, password) {

    // send a POST request to the server as JSON
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // save the token to localStorage
            localStorage.setItem('token', data.token);
            alert('Login Successful!');
        })

        .catch(err => {
            console.log(err);
        });
}


// onload , check if token is valid
window.onload = checkToken;

// check if token is valid
async function checkToken() {
    try {
        // get token from localStorage
        let token = localStorage.getItem('token');

        // send a POST request to the server as JSON
        let response = await fetch('http://localhost:3000/checkToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });

        let data = await response.json();
        console.log(data);
        if(data.status === 'OK'){
            form.style.display = 'none';
            searchSection.style.display = 'block';
            let message = document.getElementById('message');
            let decoded = atob(token.split('.')[1]);
            decoded = JSON.parse(decoded);
            message.innerHTML = `Hello ${decoded.username}, Welcome to our Website!`;
        }

    

    } catch (err) {
        console.log(err);
    }
}

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    let searchValue = searchInput.value;
    console.log(searchValue);

    // Create a new URLSearchParams object
    let params = new URLSearchParams();
    // Add your search value as a query parameter
    params.append('search', searchValue);

    // Add the query string to the URL
    window.location.search = params.toString();

    searchMessage.innerHTML = `you searched for ${searchValue}`;
});