const express = require("express")
require("dotenv").config()
const route = require("./route/route")
const app = express()
app.use("/", route)

const port = process.env.PORT 

const start = async () =>{
    try {
        app.listen(port, console.log(`listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()