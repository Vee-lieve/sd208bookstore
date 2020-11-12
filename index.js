const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const database = require("./services/database");
const BookRouter = require("./routes/books");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/api/bookstore", BookRouter);
database.connect();

app.listen(8084, console.log("Server running on port 8084"));
