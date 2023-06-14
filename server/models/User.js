import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    phoneNumber: {
      type: String,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', UserSchema);
export default User; // bhai -- UserModel -User
