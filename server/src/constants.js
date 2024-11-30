import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT;
export const DB_NAME = "test-backend";
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
