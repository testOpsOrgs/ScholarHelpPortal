import express from 'express';
import multer from 'multer';
import path from 'path'
import fs, { lstat, lstatSync } from 'fs'
import { MulterError } from 'multer';

const uploadRoute = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { year, sem, subject, content } = req.params;

   
    const uploadPath = path.join('data', year, sem, subject, content);
    cb(null, uploadPath);

  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define the route for file upload
uploadRoute.post('/upload/data/:year/:sem/:subject/:content', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});


  
  

  export default uploadRoute;
















// const uploadRoute = express.Router();

// uploadRoute.post("/data/:year/:sem/:subject/:content",(req,res)=>{
    

//     const year = req.params.year;
//     const sem = req.params.sem;
//     const subject = req.params.subject;
//     const content = req.params.content;

//     const absoluteUploadFolderPath = path.join('data',year,sem,subject,content)
    
//     if(fs.existsSync(absoluteUploadFolderPath) && (lstatSync(absoluteUploadFolderPath))){

//         const storage = multer.diskStorage({
//             destination: absoluteUploadFolderPath,
//             filename: (req,file,cb)=>{
//                 cb(null, `${file.originalname}_${Date.now()}`)
//             }
//         })

//         const fileUpload = multer({storage:storage})
//         fileUpload.single()
//     }

    
// })



