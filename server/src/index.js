import express from "express";
import connectDb from "./db/connectDb.js";
import cors from "cors";
import { PORT } from "./constants.js";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(PORT, () => {
  connectDb().then().catch();
  console.log(`Server is listening in DopeMode on ${PORT}`);
});
