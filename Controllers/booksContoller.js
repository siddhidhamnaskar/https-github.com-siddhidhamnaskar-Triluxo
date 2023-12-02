const Books=require('../models/bookModel')

const GetAllBooks=async(req,res)=>{
    try{
        const books=await Books.find().sort({createdAt:-1}).limit(20);
        res.status(200).json(books);
    
      }
      catch(err){
        res.status(505).json(err);
      }
}

const GetBookByID=async(req,res)=>{
    try{
        const book=await Books.findById(req.params.id);
        res.status(200).json(book);
    
      }
      catch(err){
        res.status(505).json(err);
      }

}

const AddBook=async(req,res)=>{
    try{
           const book=new Books({
              Name:req.body.name,
              Author:req.body.author,
              Price:req.body.price
            })
            const Book=await book.save();
            res.status(200).json(Book);
      }
      catch(err){
        res.status(505).json(err);
      }
}

const UpdateBook=async(req,res)=>{
    try{
        const book=await Books.findById(req.params.id);
         book.Name=req.body.name;
         book.Author=req.body.author;
         book.Price=req.body.price;
       
         const Book=await book.save();
         res.status(200).json(Book);
      }
      catch(err){
        res.status(505).json(err);
      }
}

const DeleteBook=async(req,res)=>{
    try{
        const book=await Books.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
      }
      catch(err){
        res.status(505).json(err);
      }

}

module.exports={GetAllBooks,GetBookByID,AddBook,UpdateBook,DeleteBook}