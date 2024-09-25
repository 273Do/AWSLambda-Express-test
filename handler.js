// const serverless = require("serverless-http");
const serverlessExpress = require("@codegenie/serverless-express");
const express = require("express");
const { todoRoutes } = require("./src/routes/todoRoutes");
const app = express();

app.use("/todos", todoRoutes);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverlessExpress({ app });
