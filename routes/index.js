const controller=require('../controller/authController')
const express=require('express')
const router=express.Router()

router.post("/",controller.CreateUser)
router.get("/get/:id",controller.GetbyId)
router.put("/update/:id",controller.UpdatebyId)
router.delete("/delete/:id",controller.DeletebyId)
router.get("/getAll",controller.getAllData)
router.delete("/deleteAll",controller.DeleteAllData)


module.exports =router