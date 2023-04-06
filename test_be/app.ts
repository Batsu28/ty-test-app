import express, { Express } from "express";
import dotenv from "dotenv";
import "./config/mongoose-config";
import TheaterRoutes from "./routes/theather.api";
import MovieRoutes from "./routes/movie-api";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(TheaterRoutes);
app.use(MovieRoutes);

app.listen(port, () => {
  console.log("server running:", port);
});
