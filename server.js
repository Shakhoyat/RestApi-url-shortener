import express from "express";
import mongoose from "mongoose";
import { shortUrl } from "./Controllers/url.js";
const app = express();

//url encoded
app.use(express.urlencoded({ extended: true }));

//rendering ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortenedUrl: null });
});

//shorting url logic
app.post("/shorten", shortUrl);

//connecting to mongodb
mongoose
  .connect(
    "mongodb+srv://shakoyatsujon:3W8IdD5g6kON8AJW@cluster0.0p8evwy.mongodb.net/",
    {
      dbName: "Nodejs101db",
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const PORT = 1000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
