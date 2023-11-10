// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage: storage });



  // Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    const file = new File({
      category: req.body.category,
      filename: req.file.filename,
    });
    file.save()
    .then(
      (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send('File uploaded successfully');
    });
  });
  
  // Serve uploaded files
  app.use('/uploads', express.static('uploads'));
  