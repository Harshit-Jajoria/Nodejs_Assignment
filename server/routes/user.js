import express from 'express';
import { getUsers,register } from '../controllers/user.js';

// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/users', getUsers);

router.post('/add-user',register)
// router.get("/:id", verifyToken, getUser);
// router.get("/:id/friends", verifyToken, getUserFriends);

// /* UPDATE */
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
// router.put("/:id",updateLinks)

export default router;
