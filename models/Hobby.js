import mongoose from "mongoose";

const hobbySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Proivde A hobby Name"],
      trim: true,
      maxlength: [50, "Hobby name cannot be more than 50 charactrs"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description Cannot Be More Than 500 Characters"],
    },
    category: {
      type: String,
      enum: ["sports", "arts", "music", "gaming", "reading", "other"],
      default: "other",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "rarely"],
      default: "weekly",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Hobby = mongoose.model("Hobby", hobbySchema);
