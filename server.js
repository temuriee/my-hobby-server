import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.get("/my-hobby", (req, res) => {
  res.json({ hobby: "ლაშქრობა და ცხენით სეირნობა" });
});

app.listen(PORT, () => {
  console.log(`Server Listening On http://localhost:${PORT}`);
});
