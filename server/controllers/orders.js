import OrdersModel from '../models/Orders.js'
export const register = async (req, res) => {
    try {
    //   const {  } = req.body;
      console.log(req.body);
      const newUser = new OrdersModel({
        name,
        phoneNumber,
        password: passwordHash,
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    }
    catch (err) {
        console.log(err);
    }
}