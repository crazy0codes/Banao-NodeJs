const express = require('express')
const post = require('./postRoutes')
const app = express();
const cors = require('cors')

const db = [
    { username: 'john_doe', password: 'P@ssw0rd' },
    { username: 'alice_smith', password: 'Secure123' },
    { username: 'bob_jackson', password: 'Secret!987' },
    { username: 'emma_jones', password: 'Pass123!' },
    { username: 'michael_brown', password: 'StrongP@ss' }
];




async function userLogin(req, res) {
    const { username, password } = req.query

    try {

        const isUser = db.some(obj => obj.password === password && obj.username === username);

        console.log(isUser)

        if (isUser) {

            res
                .status(200)
                .json({
                    loggedIn: true
                })
        }
        else {
            res
                .status(404)
                .json({
                    message: "invalid details"
                })
        }
    }
    catch (err) {
        res
            .status(500)
            .json({ message: err.message })
    }
}


async function newUser(req, res) {
    const { username, password } = req.query
    try {

        db.push({ username, password })
        console.log(db)
        res
            .status(200)
            .json({ message: "user successfull added" })
    }
    catch (err) {
        res
            .status(500)
            .json({
                message: err.message
            })
    }
}

async function changePswd(req, res) {
    const { username, password } = req.query;

    try {
        const user = db.find(obj => obj.username === username);

        if (user) {
            user.password = password;
            res.status(200).json({ message: "Password successfully changed" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


app.post('/api/login', userLogin)

app.post('/api/register', newUser)

app.post('/api/forgotpswd', changePswd)


app.use('/api/post',cors(), post)

app.get('/', function (req, res) {
    res
    .status(200)
    .send("use the post request pls")
})

app.listen(4000, () => console.log("Server is running"))