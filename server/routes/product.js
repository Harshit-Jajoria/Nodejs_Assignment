import express from 'express';
import { getProdcts } from '../controllers/product.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get('/all', verifyToken,getProdcts)


export default router;
