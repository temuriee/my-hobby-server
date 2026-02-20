import express from "express";
import { Hobby } from "../models/Hobby";

const hobbyRouter = express.Router();

//!Create New Hobby

hobbyRouter.post("/", async (req, res) => {
  try {
    const { name, description, category, frequency } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Hobby Name is Required" });
    }

    const hobby = await Hobby.create({
      name,
      description,
      category,
      frequency,
    });

    res.status(201).json({
      status: "success",
      data: hobby,
      message: "Hobby Created Succesfuly",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      error: err.message,
    });
  }
});

//! Read Get All Hobbies

hobbyRouter.get("/", async (req, res) => {
  try {
    const hobbies = await Hobby.find();
    res.status(200).json({
      status: "success",
      count: hobbies.length,
      data: hobbies,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
});

//!Get Single Hobby By Id
hobbyRouter.get("/:id", async (req, res) => {});

//! UPDATE A HOBBY BY ID
hobbyRouter.put("/:id", async (req, res) => {});

//! DELETE A HOBBY BY ID
hobbyRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const hobby = await Hobby.findByIdAndDelete(id);

    if (!hobby) {
      return res.status(404).json({
        status: "error",
        error: err.message,
      });
    }

    res.status(200).json({
      status: "success",
      data: hobby,
      message: "Hobby Deleted Succesfuly",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
});

export default hobbyRouter;
