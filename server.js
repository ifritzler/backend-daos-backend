import { Server as httpServer } from "http";
import app from "./src/app.js";
import mongoose from "mongoose";
import mongoConfig from "./src/common/config/mongo.js";
import createDB from "./src/common/createSqlTables.js";

const server = new httpServer(app);

const PORT = process.env.PORT || 3000;

if (process.env.DATACORE === "Mongo") {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URI || "mongodb://127.0.0.1:27017", mongoConfig)
    .then(() => {
      console.log("Database connected");
    });
}

if (process.env.DATACORE === "SQL") {
  createDB();
}

server.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
