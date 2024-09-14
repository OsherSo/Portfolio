import "express-async-errors";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import morgan from "morgan";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/sendEmail", async (req, res) => {
  res.send("sendEmail");
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const port = process.env.PORT || 5100;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server running on PORT ${port}....`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
