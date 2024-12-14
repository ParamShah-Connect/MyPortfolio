import express from "express";
import { uploadImage, fetchImage } from "../controllers/imageupload.js";

const imageRoute = express.Router();

imageRoute.post("/uploadImage", uploadImage);

imageRoute.get("/getImage/:identifier", fetchImage);

export default imageRoute;
