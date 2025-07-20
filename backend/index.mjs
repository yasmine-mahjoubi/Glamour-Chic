// Importer express en tant que module ES6
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// Importer le routeur pour les tours
import tourRoute from "./routes/tours.mjs";
import userRoute from "./routes/users.mjs";
import authRoute from "./routes/auth.mjs";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Connexion à la base de données
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      /*useNewUrlParser: true,
      useUnifiedTopology: true,*/
    });
    console.log("Database connection successful");
  } catch (err) {
    console.log("Database connection failed");
  }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", authRoute);
app.use("/tours", tourRoute);
app.use("/users", userRoute);

// Route racine
app.get("/", (req, res) => {
  res.send("Welcome to the MernStack-Beauty-Management application!");
});

// Démarrer le serveur
app.listen(port, () => {
  connect();
  console.log(`connected on port http://localhost:${port}`);
});
