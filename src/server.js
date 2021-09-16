import express from "express";
import morgan from "morgan";

const app = express();

const logger = morgan("dev")

const privateMiddleware = (req,res,next) =>{
    const url = req.url
    if(url === '/protected'){
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed")
    next();
}



const handleHome = (req,res) => {
    return res.send("I love you Joy!! You can Do it!!")
}

const handleProtected = (req,res) =>{
    return res.send("see! it's working or not!!")
}

app.use(logger);
app.use(privateMiddleware);
app.get("/",handleHome);
app.get("/procted",handleProtected);


const handleListening = () => console.log("Server is listening on port 4000 📡")

app.listen(4000,handleListening)