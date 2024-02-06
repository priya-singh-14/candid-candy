import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "/routes/routes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", router);

const HOSTNAME = "localhost";
const PORT = 3002;
app.listen(PORT, HOSTNAME, () => {
  console.log("running");
});