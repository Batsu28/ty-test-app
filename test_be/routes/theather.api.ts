import express, { Request, Response } from "express";
import Theaters from "../model/TheaterModel";

const TheaterRoutes = express.Router();

TheaterRoutes.get("/theater", async (req: Request, res: Response) => {
  const result = await Theaters.find().limit(8);
  console.log(result);
  res.status(200).json(result);
});

TheaterRoutes.post("/theater", (req: Request, res: Response) => {
  console.log(req.body);
});

export default TheaterRoutes;
