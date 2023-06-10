import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants.js";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    console.log('token->', token);
    console.log('end');

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};