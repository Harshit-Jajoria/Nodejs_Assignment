import express from 'express';
import { getProdcts } from '../controllers/product.js';
// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get('/all', getProdcts)

export default router;
