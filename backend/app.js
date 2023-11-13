import express from 'express'
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
const app = express();
import router from './routes/scholarRoutes.js';
import File from './schema/adminUploadSchema.js';
import 'dotenv/config';
import cors from 'cors';

import uploadRoute from './routes/uploadRoutes.js';
// Set up MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(cors());




/////////////////////////////////////////////////
const twoYearRoute = router;
app.use('/',twoYearRoute);
const adminUploadRoute = uploadRoute;
app.use('/',adminUploadRoute)


console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});