import { Router, Request, Response } from "express";

const router = Router();

export default router.get("/test", (req, res) => {
  res.status(200).send("API Working!");
});
