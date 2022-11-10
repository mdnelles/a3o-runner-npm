import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

/* eslint-disable */
const env = require("dotenv").config().parsed;

import * as runners from "./controllers/runners";

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const jsonParser = bodyParser.json();

const port = process.env.PORT || 5026;

// express config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use(express.json());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(helmet());



app.post("/hook", runners.hook);


app.listen(port, function() {
    console.log("Server is running on port: " + port);
 });

export default app;