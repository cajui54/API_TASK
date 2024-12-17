import { Router } from "express";
import { createTask, deleteTask, getTasks } from "./controllers/taskController";
import { validate } from "./middleware/handleValidation";
import { taskCreateValidation } from "./middleware/taskValidation";

const router = Router();

router.get("/task", getTasks);
router.post("/task", taskCreateValidation(), validate, createTask);
router.delete("/task/:id", deleteTask);
export default router;
