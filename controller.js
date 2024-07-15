const users = require("./data");


const getAll = async(req,res) => {
        try {
            const names = users.map(user => user.name)
        res.send(names)  
        
        }
        catch(error){
             console.log(error)
        
        }
  
}
const getOne = async(req,res) => {
    const name = req.params.name
    const result = users.find(user => user.name == name)
     res.send(result)


}
const update = async(req,res) => {
    const name = request.params.name
    res.send(`${name} has been updated`)

}
const Delete = async(req,res) => {
    const name = request.params.name
    res.send(`${name} has been deleted`)

}
const add  = async(req,res) => {
    const name = req.body.name
    const  age = req.body.age
    res.json({name:name,age:age})

}




module.exports = {
    getAll,getOne,Delete,add,update
}
