import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/message.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

app.use(cors(
  {
    origin:["https://shahparam.vercel.app"],
    methods:["post","get","put","delete"],
    credentials:true
  }
))
app.use(express.json());
app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.end("hello")
})
app.use("/", router);

app.listen(process.env.PORT);