import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";

const PORT: number = parseInt(`${process.env.PORT || 3001}`);
const app = express();

app.use(morgan("tiny"));

app.post("/mint/:wallet", (req: Request, res: Response, next: NextFunction) => {
  res.json(true);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
