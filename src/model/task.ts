import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    isCompleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model("Task", taskSchema);
