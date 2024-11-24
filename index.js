const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

const users = [
    {id: 1, name: "AKash", email: "akash@gmail.com"},
    {id: 2, name: "Ashik", email: "ashik@gmail.com"},
    {id: 3, name: "Ahsan", email: "ahsan@gmail.com"},
]

app.get("/", (req, res) => {
    res.send("user management server is running...")
});

app.get("/users", (req, res) => {
    res.send(users)
});

app.post('/users', (req, res) => {
    console.log("Post Api Hitting")
    console.log(req.body)
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});