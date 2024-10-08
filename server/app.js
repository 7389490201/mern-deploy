const express=require('express');
const mongoose=require("mongoose");
const app=express();
require("dotenv").config();
const cors=require("cors")

const corsOptions={
    origin:"http://localhost:3000"
}
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(201).json({message:"Connected to backend"});
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    const PORT=process.env.PORT || 8000;
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
})
