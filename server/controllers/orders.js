import OrdersModel from '../models/Orders.js';
export const placeOrder = async (req, res) => {
  try {
    const { userId, userName, productDetail, totalPrice } = req.body;
    const newUser = new OrdersModel({
      userId,
      userName,
      productDetail,
      totalPrice,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
  }
};

export const getOrder = async (req, res) => {
  console.log('get Order called');
  const id=req.params.id;
  console.log(id);
  try {
    const orderDetails = await OrdersModel.find({userId:id});
    res.status(200).json(orderDetails);
    
  } catch (err) {
    res.status(404).json({ message: err.message });
  }

}
