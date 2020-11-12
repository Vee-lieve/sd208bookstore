const express = require("express");
const router = express.Router();

const {
  getBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;