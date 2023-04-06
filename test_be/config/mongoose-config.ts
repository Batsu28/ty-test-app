import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(`${process.env.MONGOOSE_CONNECT_KEY}`)
  .then(() => {
    console.log("connected to mongoose");
  })
  .catch((err) => {
    console.log("error");
  });
