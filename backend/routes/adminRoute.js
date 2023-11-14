import express from 'express'
import User from '../schema/adminUploadModel.js';
const AdminRouter  = express.Router();
import bcrypt from 'bcryptjs'

var salt = bcrypt.genSaltSync(10);

AdminRouter.get("/work",(req,res)=>{
    res.json('something good')
})

AdminRouter.post("/register", async(req, res)=>{
    
    const {username, password} = req.body
  
    try{
      const userDoc = await User.create({
        username:username,
        password:bcrypt.hashSync(password, salt)
      })
      console.log(userDoc)
      res.json(userDoc)
    }catch(error){
      res.status(400).json(error)
    }
  })
  

export default AdminRouter;