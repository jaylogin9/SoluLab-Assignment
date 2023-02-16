import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(json());

import createRoute from "./router/create.route.js";
import readRoute from "./router/read.route.js";
import readAllRoute from "./router/readAll.route.js";
import updateRoute from "./router/update.route.js";
import deleteRoute from "./router/delete.route.js";
const PORT = process.env.PORT || 7000;

//Mongoose Connection.
mongoose.connect(process.env.MONGO_DB);
mongoose.connection.on("error", (err) => {
  console.log("Connection failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("Connected with database......");
});

//route
app.use("/create", createRoute);
app.use("/read", readRoute);
app.use("/readAll", readAllRoute);
app.use("/update", updateRoute);
app.use("/delete", deleteRoute);

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
