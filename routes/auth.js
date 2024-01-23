import { Router } from "express";
import jwt from 'jsonwebtoken';
const router = Router();

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '16800s' });
  }

router.post('/', (req, res) => {
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
  });

export default router;