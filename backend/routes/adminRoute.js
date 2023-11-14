import express from 'express'
const AdminRouter  = express.Router();

AdminRouter.get("/work",(req,res)=>{
    res.json('something good')
})

AdminRouter.post('/register', async(req, res)=>{
    console.log(req.body)
    const {username, password} = req.body
  
    try{
      const userDoc = await AdminModel.create({
        username:username,
        password:bcrypt.hashSync(password, salt)
      })
      res.json(userDoc)
    }catch(error){
      res.status(4000).json(error)
    }
  })
  

export default AdminRouter;