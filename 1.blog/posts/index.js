const express = require("express");
const { randomBytes } = require("crypto");
const app = express();
const PORT = 3000;
app.use(express.json());
const posts = [];
app.get("/posts", (req, res) => {
  res.json({ posts });
});
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const title = req.body.title;
  const post = { id, title };
  posts.push(post);
  res.status(201).json(post);
});
app.listen(PORT, () => {
  console.log(`Posts service is running on port http://localhost:${PORT}`);
});
