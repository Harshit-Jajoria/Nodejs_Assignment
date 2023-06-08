import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/User.js';
import userRoutes from './routes/user.js'
import jwt from 'jsonwebtoken';
import { MONGO_URI, PORT } from './constants.js';


export const users = [
  {
    name: 'Ramesh',
    phoneNumber:'9191919191',    
    password: '123456789',
  },
  {
    name: 'Harshit',
    phoneNumber:'9911911050',    
    password: 'abcdefghij',

  }
]

// Configuration
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({ origin: '*' }));


//Routes
app.use('/',userRoutes)
// app.use('/add-user', addUser);





// Mongoose setup
mongoose.set('strictQuery', false);
const port = PORT || 6000;
app.listen(port, () => {
  console.log(`Server is running on port number ${PORT} `);
});

app.get('/', function (req, res) {
  res.send(`Backend is running on port number ${PORT}`);
});

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log(`conneted to db`);
    // /* ADD DATA ONE TIME */
    // User.insertMany(users);
    
  })
  .catch((error) => console.log(`${error} -->  did not connect`));


//  const createToken= async()=>{
//   const token=await jwt.sign({id:'648163ff40599ec344924bf8'},'hellointheworldofthejsonwebtoken')
//   console.log(token);
//   const verifyUser=await jwt.verify(token, 'hellointheworldofthejsonwebtoken')
//   console.log(verifyUser);
//  }
//  createToken()
