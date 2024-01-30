const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fakeDatabase = require('./database.js');


// Middleware
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(cors({ 
    origin: 'http://127.0.0.1:5500', 
    credentials: true  // Add this line to allow credentials
}));

app.post('/login', (req, res) => {
    // get username and password from request body
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;

    // check if username and password are correct
    if (checkLogin(username , password)) {
        // User is valid, create a token
        const token = jwt.sign({ username: username }, 'secret-key', { expiresIn: '24h' });

        // Send the token to the client
        res.json({ token: token });
    } else {
        // User is not valid, send an error response
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

function checkLogin(username , password) {
    let user = fakeDatabase.find(user => user.username === username && user.password === password);
    if (user) {
        console.log("User found");
        // send access token to client

        return true;
    } else {
        console.log("User not found");
        return false;
    }
}

app.post('/checkToken', (req, res) => {
    // get token from the request body
    let token = req.body.token;

    // check if token is valid
    jwt.verify(token, 'secret-key', (err, decoded) => {
        
        if (err) {
            // send error response
            res.status(401).json({ error: 'Invalid token' });
        } else {
            // send OK response
            res.json({ status: 'OK' });
        }
    });
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port} ✈`);
});
