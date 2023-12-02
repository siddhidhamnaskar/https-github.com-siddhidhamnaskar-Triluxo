const express=require('express');
const router=express.Router();
const {GetAllBooks,GetBookByID,AddBook,UpdateBook,DeleteBook}=require("../Controllers/booksContoller")

router.get("/books",GetAllBooks);
router.get("/books/:id",GetBookByID);
router.post("/addBook",AddBook );
router.put("/book/edit/:id",UpdateBook);
router.delete("/blogs/:id",DeleteBook);

module.exports=router;

