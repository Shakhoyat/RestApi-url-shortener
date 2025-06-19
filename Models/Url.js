import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  resultUrl: String,
  originalUrl: String,
});

export const Url = mongoose.model("shortUrl", urlSchema);
