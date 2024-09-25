const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    todos: [
      {
        id: 1,
        title: "First task",
        description: "This is the first task",
      },
      {
        id: 2,
        title: "Second task",
        description: "This is the second task",
      },
    ],
  });
});

module.exports.todoRoutes = router;
