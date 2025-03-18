const express=require("express")
const router=express.Router()
const User=require("../model/User")
const bcrypt=require("bcrypt");

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error saving user", error: err });
    }
  });

module.exports=router;