import express from 'express'
import User from '../schema/adminUploadModel.js';
const AdminRouter  = express.Router();
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


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


AdminRouter.post('/login', async(req, res)=>{
  const {username, password} = req.body
    const userDoc = await User.findOne({username})
    console.log(userDoc)
    let passok
    if(!userDoc){
        res.status(400).json('Invalid Credentials')
    }else{
        console.log("the password is correct")
        passok = bcrypt.compareSync(password, userDoc.password);
    }

    if(passok){
        //loggedin
        jwt.sign({username, id:userDoc._id}, process.env.SECRET, {},(err, token)=>{
            if (err) throw err;
            res.cookie('token',token).json({
                id: userDoc._id,
                username:userDoc.username
            })
        })
    }else{
        res.status(400).json('Invalid Credentials')
    }
})


AdminRouter.get('/profile',(req,res)=>{
  const {token} = req.cookies;
  jwt.verify(token, process.env.SECRET, {},(err, info)=>{
      if (err) throw err;
      res.json(info);

  })
  res.json(req.cookies)
})


AdminRouter.post('/logout',(req, res)=>{
  res.cookie('token','').json('loggout out')
})
  

export default AdminRouter;