
import express from "express";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/message.js";
import imageRoute from "./routes/imagesRoute.js";

dotenv.config();
const url = process.env.mongo_url;


const app = express();

app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 }, 
}));
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(express.static("public"));

app.use(cors(
  {
    origin:["http://localhost:5173","https://shah-param.vercel.app","https://shahparam.vercel.app/"],
    methods:["post","get","put","delete"],
    credentials:true
  }
))

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

app.use(express.json());
app.use("/", router);
app.use("/image", imageRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
