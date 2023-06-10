import mongoose from 'mongoose';
const ordersSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productId: { type: String, required: true },
    category: { type: String, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model('Orders', ordersSchema);
export default Orders;
