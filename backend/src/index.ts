import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { mintAndTransfer } from "./Web3Provider";

const PORT: number = parseInt(`${process.env.PORT || 3001}`);
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

const nextMint = new Map<string, number>();

app.post(
  "/mint/:wallet",
  async (req: Request, res: Response, next: NextFunction) => {
    const wallet = req.params.wallet;

    if (nextMint.has(wallet) && nextMint.get(wallet)! > Date.now()) {
      res.status(400).json({ cause: { message: "Try again tomorrow" } });
      return;
    }

    try {
      const tx = await mintAndTransfer(wallet);
      res.status(200).json(tx);
    } catch (error: any) {
      console.log(error.cause.message);
      res.status(500).json(error);
    }

    nextMint.set(wallet, Date.now() + 24 * 60 * 60 * 1000);
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
