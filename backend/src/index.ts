import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { mintAndTransfer } from "./Web3Provider";

const PORT: number = parseInt(`${process.env.PORT || 3001}`);
const app = express();

app.use(morgan("tiny"));

app.post(
  "/mint/:wallet",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tx = await mintAndTransfer(req.params.wallet);
      res.status(200).json(tx);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});