import { Request, Response } from "express";
import { TaskModel } from "../model/task";

export const getTasks = async (request: Request, response: Response) => {
  try {
    const tasks = await TaskModel.find();

    return response.status(200).json(tasks);
  } catch (error) {
    console.log(`Occurred a error to get task in database!`);
    console.log(`${error}`);
    return response.status(404).json(error);
  }
};
export const createTask = async (request: Request, response: Response) => {
  try {
    const data = request.body;
    const task = await TaskModel.create(data);
    console.log(`A new task has been add to database!`);

    return response.status(201).json(task);
  } catch (error) {
    console.log(`Occurred a error to add task to database!`);
    console.log(`${error}`);
    return response.status(404).json(error);
  }
};
export const deleteTask = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const data = await TaskModel.findByIdAndDelete(id);
    return response.status(200).json(data);
  } catch (error) {
    return response.status(404).json(error);
  }
};
