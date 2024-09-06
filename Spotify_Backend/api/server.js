import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "../src/routes/songRoute.js";
import albumRouter from "../src/routes/albumRoute.js";
import connectDB from "../src/config/mongodb.js";
import connectCloudinary from "../src/config/cloudinary.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());

// CORS Configuration
app.use(cors({
    origin: ["https://spotify-clone-frontend-three.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true, // Ensure lowercase true
}));

// Initializing routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get("/", (req, res) => res.send("API Working"));

// Starting server
app.listen(port, () => console.log(`Server started on port ${port}`));
