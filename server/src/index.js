import express from "express";
import connectDb from "./db/connectDb.js";
import cors from "cors";
import { PORT } from "./constants/constants.js";

const app = express();

app.use(express.json());

app.use(cors());

// Start the server
app.listen(PORT, () => {
  connectDb();
  console.log(`Server is listening in DopeMode on ${PORT}`);
});
