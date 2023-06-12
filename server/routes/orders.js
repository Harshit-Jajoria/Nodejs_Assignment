import express from 'express';
import { verifyToken } from "../middleware/auth.js";
import { getOrder, placeOrder } from '../controllers/orders.js';

const router = express.Router();

router.post('/add-order', verifyToken,placeOrder)
router.get('/get-order/:id', verifyToken,getOrder)

export default router;
