import express from 'express'
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
const app = express();
import router from './routes/scholarRoutes.js';

import 'dotenv/config';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import uploadRoute from './routes/uploadRoutes.js';
import cookieParser from 'cookie-parser';
import AdminModel from './schema/adminUploadModel.js';
import bcrypt from 'bcryptjs'
import AdminRouter from './routes/adminRoute.js';



var salt = bcrypt.genSaltSync(10);
// Set up MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser())


/////////////////////////////////////////////////
const userRoute = router;
app.use('/',userRoute);
const adminUploadRoute = uploadRoute;
app.use('/',adminUploadRoute)
const adminRouter = AdminRouter;
app.use('/', adminRouter)



console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});