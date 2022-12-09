import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.route.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/health", (req, res) => {
  res.status(200).send();
});

app.use("/api", router);

app.use(errorHandlerMiddleware)
export default app;
