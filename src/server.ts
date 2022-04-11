import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/index";
import { router } from "./Routes";
import { InitialDataRequestController } from "./controllers/InitialDataRequestController";


const app = express();
app.use(express.json());

AppDataSource.initialize()
.then(async() => {
console.log('Database connected');
const initialDataRequestController = new InitialDataRequestController();

        await initialDataRequestController.execute();
        
})
.catch((err) => {
        console.error("Error during Data Source initialization:", err)
});
app.use(router);
app.listen(4000, () => {
        console.log("Server started on port 4000!")
});