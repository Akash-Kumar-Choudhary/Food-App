import express from "express";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";
import morgan from "morgan";
import mealRouter from './router/mealRouter.js'
import cors from "cors";
import bodyParser from 'body-parser'
import path from 'path'
import {fileURLToPath} from 'url';


dotenv.config();
connectionDB();

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname , './frontend/build')))
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use((req, res , next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next()
})

app.use("/api", mealRouter);


app.get('/' , function( req , res){
  res.status(200).send('Fooda-app')
})


const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`server on port ${process.env.DEV_MODE} on ${PORT}`);
});
