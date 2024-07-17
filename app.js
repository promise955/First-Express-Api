const express = require("express");
const cors = require("cors")
const body_parser = require("body-parser");
const router = require('./route')

const app = express()
app.use(cors())
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.use("/api",router)
const notfound = (req,res) => res.status(404).send('not found')
app.use(notfound)
const Port = process.env.port ||  3456


app.listen(Port,() => {
    console.log(`Server running on ${Port}`);
})

module.exports = app