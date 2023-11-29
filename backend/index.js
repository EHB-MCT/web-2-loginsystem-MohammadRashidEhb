const express = require('express')
const app = express()
const cors = require('cors')

let users= [];

app.use(express.urlencoded({extended:false}));
app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    
    if(!req.body.username || !req.body.password || !req.body.email) {
        res.status(401).send({
            status: "Request failed",
            message: "Missing fields of one of the following: username, password, email"
        })
    }

    users.push({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    console.log(users)

    res.send({
        status: "Success",
        message: "User registered successfully"
    })
});

app.listen(3000);
console.log("app running at http://localhost:3000");