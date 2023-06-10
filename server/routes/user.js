import express from 'express';
import { getUsers,login,register } from '../controllers/user.js';

// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/users', getUsers);

router.post('/add-user',register)
router.post('/login-user',login)


export default router;
