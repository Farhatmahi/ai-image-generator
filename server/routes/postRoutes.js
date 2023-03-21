const express = require("express");
const dotenv = require("dotenv");
const { v2 } = require("cloudinary");
const PostSchema = require("../models/post");

dotenv.config();

const router = express.Router();

v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get all post

router.route("/").get(async (req, res) => {
  try {
    const posts = await PostSchema.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoURL = await v2.uploader.upload(photo);
    const newPost = await PostSchema.create({
      name,
      prompt,
      photo: photoURL.url,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

module.exports = router;
