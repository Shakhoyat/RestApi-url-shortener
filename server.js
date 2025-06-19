import express from "express";

const app = express();
const PORT = 1000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});
