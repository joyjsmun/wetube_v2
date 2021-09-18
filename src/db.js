//mongodb://127.0.0.1:27017/


import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


const db = mongoose.connection;

const handleOpenDb = () => console.log("✅ Connected to DB");
const handleErrorDb = (error) => console.log("❌ DB Error",error);
db.on("error",handleErrorDb);
db.once("open",handleOpenDb,)