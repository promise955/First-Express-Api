const express = require('express')
const {getAll,getOne,update,Delete,add} = require('./controller')
const router = express.Router()

router.get("/",getAll)

router.get("/:name",getOne)

router.post("/post",add)

router.patch("/:name",update)

router.delete("/:name",Delete)





module.exports = router