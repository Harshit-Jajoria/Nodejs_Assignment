import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import userRoutes from './routes/user.js'
import productRoutes from './routes/product.js'
import jwt from 'jsonwebtoken';
import { MONGO_URI, PORT } from './constants.js';
import { data } from './data.js';
import Product from './models/Product.js';


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
app.use(cors({ origin: '*' }));


//Routes
app.use('/',userRoutes)
app.use('/product',productRoutes)





// Mongoose setup
mongoose.set('strictQuery', false);
const port = PORT || 6000;
app.listen(port, () => {
  console.log(`Server is running on port number ${port} `);
});

app.get('/', function (req, res) {
  res.send(`Backend is running on port number ${port}`);
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
    // Product.insertMany(data)
    
  })
  .catch((error) => console.log(`${error} -->  did not connect`));


//  const createToken= async()=>{
//   const token=await jwt.sign({id:'648163ff40599ec344924bf8'},'hellointheworldofthejsonwebtoken')
//   console.log(token);
//   const verifyUser=await jwt.verify(token, 'hellointheworldofthejsonwebtoken')
//   console.log(verifyUser);
//  }
//  createToken()
