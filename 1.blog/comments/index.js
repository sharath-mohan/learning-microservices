const express = require("express");
const { randomBytes } = require("crypto");
const app = express();
const PORT = 3001;
app.use(express.json());
const commentsByPostId = {};
app.get("/posts/:id/comments", (req, res) => {
  const id = req.params.id;
  res.json(commentsByPostId[id] || []);
});
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const content = req.body.content;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  res.status(201).json(comments);
});
app.listen(PORT, () => {
  console.log(`Posts service is running on port http://localhost:${PORT}`);
});
