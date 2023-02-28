const express = require('express')
const dotenv = require('dotenv')
dotenv.config('./.env');
const mainRouter = require('./routes/index')


const app = express();

app.use("/api" , mainRouter)

app.get("/", (req,res) => {
    console.log("user was called");
    res.send({
        "name": "sumit",
        "agr": 24
    })
})

const PORT = process.env.PORT;

app.listen(PORT , () => {
    console.log("listen at port 4000");
})