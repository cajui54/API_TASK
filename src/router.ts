import { Router, Request, Response } from "express";

const router = Router();

export default router.get("/task", (req, res) => {
  res.status(200).send("API Working!");
});
