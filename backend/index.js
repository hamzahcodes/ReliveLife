import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv';
const app = express();
dotenv.config({ path: `.env.local`, override: true });

// app.use() defines middleware and has to be taken care of in the order in which they appear
// body parser to parse the data sent via post request
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

const corsOptions = {
  origin: "https://relive-life-frontend.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:
    "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Origin,Cache-Control,Content-Type,X-Token,X-Refresh-Token",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use("/posts", postRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Relive Life')
})
//connection to mongodb atlas
// username password and database name form mongodb cluster
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;
//mongoose used to connect server to database
// useNewUrlParser is used to avoid deprecation warning
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port:", PORT))
  )
  .catch((error) => console.log(error.message));
