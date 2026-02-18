import express from "express";

const hobbyRouter = express.Router();

hobbyRouter.get("/test", async (req, res) => {
  return res.json({ title: "Hello" });
});

export default hobbyRouter;
