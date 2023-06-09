import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import { JWT_SECRET } from '../constants.js';

// READ
export const getUsers = async (req, res) => { 
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Resgister User
export const register = async (req, res) => {
  try {
    const { name, phoneNumber, password } = req.body;
    console.log(req.body);

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      phoneNumber,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

// Login In
export const login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    console.log(req.body);

    const user = await UserModel.findOne({ phoneNumber: phoneNumber });
    if (!user) return res.status(400).json({ msg: 'USER NOT EXIST' });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) return res.status(400).json({ msg: 'INVALID CREDENTIALS' });
    console.log(JWT_SECRET);
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    console.log(token);
    delete user.password;
    console.log('login successful  from sever');
    res.status(200).json({ token, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
