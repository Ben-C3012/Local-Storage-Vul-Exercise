# HTML5 Security Exercise 
In this HTML5 Exercise, we will exploit a vulnerability in the local storage web API.

## Installation

```bash
cd server
```

```bash
npm install 
```

```bash
npm start 
```
## Server Setup
1. Start the server.
2. Open a live server instance of the index.html file. 

## Exercise Steps

### Step 1: Login ✅

The website implements a login function using local storage. Login with an account of your choice. Here are some example accounts:

    |   #   |     username    |    password    |
    |-------|-----------------|----------------|
    |   1   |  Michael Scott  |    password    |
    |   2   |   Jim Halpert   |     dragon     |
    |   3   |    Pam Beesly   |    superman    |
    |   4   |  Dwight Schrute |    zoominfo    |
    |   5   |   Kevin Malone  |   password5    |
    |   6   |  Walter White   |    PureMeth    |
    |   7   |  Jesse Pinkman  |    81207cH     |
    |   8   |  Hank Schrader  |     DEA123     |
    |   9   |    Gus Fring    |   El Pollero   |
    |   10  |  Saul Goodman   | BetterCallSaul |
    |   11  |  Skyler White   |     Marie      |
    |   12  |  Paul Atreides  |      dune      |
    |   13  |    John Doe     |    john123     |
    |   14  |  Harry Potter   |    hogwarts    |
    |   15  | Hermione Granger|    leviosa     |
    |   16  |   Ron Weasley   |   quidditch    |
    |   17  |    Jon Snow     | winteriscoming |
    |   18  |   Arya Stark    | valarmorghulis |
    |   19  |   Tony Stark    |    ironman     |
    |   20  |  Peter Parker   |   spiderman    |


### Step 2: XSS Attack ⚔
Split into pairs. Your task is to simulate an XSS attack to steal your partner's token 🔑

Craft a URL with a reflected XSS payload that triggers a JavaScript alert with the token value.
Send this URL to your partner via Slack.
Step 3: Capture the Token
Create a Node.js Express HTTP server using CodeSandbox.

Modify your XSS payload to send the token to your server instead of triggering an alert.
When your partner clicks the link, your server should receive a request containing the token and the victim's IP address.

### Step 3: Secure The Code 🛡

Use an http cookie instead of local-storage to manage authentication.
