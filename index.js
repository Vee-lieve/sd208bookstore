const express = require("express");
const app = express();

const database = require("./services/database");
const BookRouter = require("./routes/books");

app.use(express.json());
app.use("/dashboard", BookRouter);
database.connect();

app.listen(8082, console.log("Server running on port 8082"));
