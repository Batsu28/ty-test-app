import { strict } from "assert";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Movies from "../model/MovieModel";

const MovieRoutes = express.Router();

MovieRoutes.get("/movies", async (req: Request, res: Response) => {
  try {
    const { limit }: any = req.query;
    const result = await Movies.find({})
      .select({ _id: 1, title: 1, poster: 1 })
      .skip(limit)
      .limit(6);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

MovieRoutes.get("/movie/:id", async (req: Request, res: Response) => {
  try {
    let id = new mongoose.Types.ObjectId(req.params.id);

    console.log(id);

    const result = await Movies.findOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

MovieRoutes.post("/movie", async (req: Request, res: Response) => {
  try {
    const genres: string[] = [];
    const result = await Movies.find({}).select({ genres: 1 });
    // result.forEach((genre) => genres.push(...genre.genres));

    console.log(genres);
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

export default MovieRoutes;
