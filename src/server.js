import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter"

const app = express();
const logger = morgan("dev");

console.log(process.cwd());

app.set("view engine","pug");
app.set("views",process.cwd() + "/src/views");
app.use(logger);
app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);


const handleListening = () => console.log("✅Server is listening on port 4000 📡")

app.listen(4000,handleListening)