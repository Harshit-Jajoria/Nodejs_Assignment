import mongoose from 'mongoose';
const ordersSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    productDetail: [
      {
        productId: String,
        productName: String,
        productCategory: String,
      },
    ],
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model('Orders', ordersSchema);
export default Orders;
