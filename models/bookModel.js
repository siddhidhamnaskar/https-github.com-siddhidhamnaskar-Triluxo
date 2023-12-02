const mongoose=require("mongoose");

const {Schema}=require("mongoose");

const bookSchema=new Schema({
    Name:{type:"String",required:true },
    Author:{type:"String",required:true},
    Price:{type:'Number',required:true},
  
},{
    timestamps:true
})

const BookModel=mongoose.model("Book",bookSchema)
module.exports=BookModel;