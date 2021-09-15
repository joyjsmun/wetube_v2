import express from "express";

const app = express();

const handleHome = (req,res) => {
    return res.send("I love you Joy!! You can Do it!!")
}
app.get("/",handleHome)

const handleListening = () => console.log("Server is listening on port 4000 📡")

app.listen(4000,handleListening)