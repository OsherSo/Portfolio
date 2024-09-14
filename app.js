import "express-async-errors";

import morgan from "morgan";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

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
