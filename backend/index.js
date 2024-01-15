const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
app.use("/api/user", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
