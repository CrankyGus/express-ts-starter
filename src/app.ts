import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { MainRouter } from "./routes";

export default function bootstrap() {
  const app = express();

  app.use(MainRouter);
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"]
    })
  );

  app.listen(process.env.PORT, () =>
    console.log(`Server is listening on port ${process.env.PORT}`)
  );

  return app;
}
