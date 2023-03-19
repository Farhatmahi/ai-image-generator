const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
const connectDB = require("./mongodb/connect");
const postRoutes = require("./routes/postRoutes");
const createRoute = require("./routes/createRoutes");

//middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/create", createRoute);

//server
app.get("/", (req, res) => {
  res.send("OpenAI server running");
});

try {
  connectDB(process.env.MONGO_URL);

  app.listen(port, () => {
    console.log("Server running on port : ", port);
  });
} catch (error) {
  console.error(error);
}
