const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre : {type: String, required: true},
    yearPublished: {type: Date, required: true},
    price: {type: Number, required: true},
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;