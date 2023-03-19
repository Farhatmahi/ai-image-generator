const express = require("express");
const dotenv = require("dotenv");
const { cloudinary } = require("cloudinary");

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
})



module.exports = router;
