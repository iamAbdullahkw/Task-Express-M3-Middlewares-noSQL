const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFoundHandler = require("./middlewere/notFoundHandle");
const errorHandler = require("./middlewere/errorHandle");

connectDb();
app.use(express.json());
app.use("/posts", postsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
