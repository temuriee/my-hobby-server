import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import hobbyRouter from "./routes/hobbyRoutes";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed Error:", err);
  });

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/hobbies", hobbyRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
