import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/message.js";
import bodyParser from "body-parser";

app.use(cors(
  {
    // origin:
  }
))
app.use(bodyParser.json());

app.use("/", router);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
