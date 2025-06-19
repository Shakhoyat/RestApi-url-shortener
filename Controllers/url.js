import { Url } from "../Models/Url.js";
import shortid from "shortid";
export const shortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortenedUrl = shortid.generate();

  const shortUrl = `http://localhost:1000/${shortenedUrl}`;
  //save to database
  const newUrl = new Url({
    originalUrl: longUrl,
    resultUrl: shortUrl,
  });
  await newUrl.save();
  console.log("Short url saved to database:", newUrl);
  res.render("index.ejs", { shortenedUrl: shortUrl });
};
