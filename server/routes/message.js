import express from "express";
import dotenv from "dotenv";
import sendMessage from "../controllers/logics.js";

dotenv.config();

const router = express.Router();

router.post("/sendEmail",sendMessage )
  
export default router;
