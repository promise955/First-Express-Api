const express = require("express");
const cors = require("cors")
const body_parser = require("body-parser");
const users = require("./data");
const router = express.Router()
const app = express()
app.use("/",router)
app.use(cors())
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

const Port = process.env.port ||  3456

router.get("/",(request,response) => {
    const names = users.map(user => user.name)
    response.send(names)  
})

router.get("/:name",(request,response) => {
    const name = request.params.name
   const result = users.find(user => user.name == name)
    response.send(result)
})

router.post("/post",(request,response)=> {
    const name = request.body.name
    const  age = request.body.age
    response.json({name:name,age:age})
})

router.put("/update/:name",(request,response) => {
    const name = request.params.name
     response.send(`${name} has been removed`)
})

router.delete("/remove/:name",(request,response) => {
  const name = request.params.name
  response.send(`${name} has been deleted`)
})

app.listen(Port,() => {
    console.log(`Server running on ${Port}`);
})
