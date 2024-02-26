// to create applicaction server, routes being used
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routers/routes.js";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended : false }));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(bodyParser.json());

app.use("/", router);

export default app;

