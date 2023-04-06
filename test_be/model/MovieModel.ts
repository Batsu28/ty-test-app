import mongoose from "mongoose";
import { FullMovieType } from "../util/types";

const movieSchema = new mongoose.Schema<FullMovieType>(
  {
    title: String,
    poster: String,
    genres: [String],
  },
  { collection: "movies" }
);

const Movies = mongoose.model("Movies", movieSchema);

export default Movies;
