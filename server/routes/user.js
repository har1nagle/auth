import express from 'express';
import bcrpt from 'bcrypt';
const router = express.Router();

import {User} from "../models/User.js"

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({email})

  if (user) {
    return res.json({message: "use already existed"})
  }

  const hashpassword = await bcrpt.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  
  })

  await newUser.save()
  return res.json({message: "record registed"})
})

export {router as UserRouter}