import express from 'express';
const router = express.Router();
import fs from 'fs';
import path from 'path';

router.get("/data/:year/:sem/:subject/:content",(req,res)=>{


    const year = req.params.year;
    const sem = req.params.sem;
    const subject = req.params.subject;
    const content = req.params.content;
    //const folderAbsolutePath = path.join(__dirname, 'public', folderPath); // Assuming the files are in the 'public' directory
    let folderAbsolutePath='';
    if (content === 'paper'){
      folderAbsolutePath = path.join('data',year,sem, subject,'paper'); 
    }
    else if(content==='notes'){
      folderAbsolutePath = path.join('data',year,sem, subject,'notes');
    }
     
  
    // Check if the folder exists
    if (fs.existsSync(folderAbsolutePath) && fs.lstatSync(folderAbsolutePath).isDirectory()) {
      // Read the items in the folder
      //res.send(`current folder is ${folderAbsolutePath}`)
      fs.readdir(folderAbsolutePath, (err, files) => {
        if (err) {
          // Handle any errors, e.g., by sending an error response
          res.status(500).send('Error reading folder.');
        } else {
          // Send the list of items in the folder as a response
          console.log(files)
          res.json({ folderItems: files });
        }
      });
    } else {
      // Handle the case where the folder doesn't exist
      res.status(404).send('Folder not found.');
    }
})

router.get("/data/:year/:sem/:subject/:content/:filename",(req, res)=>{
  const year = req.params.year;
  const sem = req.params.sem;
  const subject = req.params.subject;
  const content = req.params.content;
  const filename = req.params.filename;

  let folderAbsolutePath='';
    if (content === 'paper'){
      folderAbsolutePath = path.join('data',year,sem, subject,'paper'); 
    }
    else if(content==='notes'){
      folderAbsolutePath = path.join('data',year,sem, subject,'notes');
    }

  const finalFile = path.join(folderAbsolutePath,filename);
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Send the file as a stream
  const fileStream = fs.createReadStream(finalFile);
  fileStream.pipe(res);

})






// router.get("/data/:year",(req,res)=>{

//     const year = req.params.year;    


//     //const folderAbsolutePath = path.join(__dirname, 'public', folderPath); // Assuming the files are in the 'public' directory
//     const folderAbsolutePath = path.join('data',year) 
  
//     // Check if the folder exists
//     if (fs.existsSync(folderAbsolutePath) && fs.lstatSync(folderAbsolutePath).isDirectory()) {
//       // Read the items in the folder
//       fs.readdir(folderAbsolutePath, (err, files) => {
//         if (err) {
//           // Handle any errors, e.g., by sending an error response
//           res.status(500).send('Error reading folder.');
//         } else {
//           // Send the list of items in the folder as a response
//           console.log(files)
//           res.json({ folderItems: files });
//         }
//       });
//     } else {
//       // Handle the case where the folder doesn't exist
//       res.status(404).send('Folder not found.');
//     }
// });





export default router;