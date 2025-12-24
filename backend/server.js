import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";
import cors from "cors";



const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
 app.use(
   cors({
     origin: "http://localhost:5173", // Adjust this to your frontend URL
     credentials: true,
   })
 );


app.use("/api/auth", authRoutes);


connectDB();

app.get("/", (req, res) => {
  console.log("Home route was hit");
  res.send("Backend server is running 🚀");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
