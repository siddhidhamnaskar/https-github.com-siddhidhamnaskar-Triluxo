const express=require("express");
const connection=require("./Config/db");
const BookRouter=require("./Routes/booksRoute")
const cors=require('cors');
const app=express();



const dotenv=require("dotenv");
dotenv.config();
const PORT=process.env.PORT || 3033;



app.use(cors());
app.use(express.json());
app.use('/',BookRouter);

app.listen(PORT,()=>{
    try{
    connection();
     console.log(`Server is running on ${PORT}`);

    }
    catch(err){
        console.log("Error");
    }
});



