import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/index";
import { router } from "./Routes";
import { InitialDataRequestController } from "./controllers/InitialDataRequestController";

if(!process.env.PORT||!process.env.TWITCH_CLIENT_ID||!process.env.TWITCH_TOKEN||!process.env.SECRET){
        console.log("Missing enviroment variables, app will not run");
        process.exit(30);
}






const app = express();
app.use(express.json());

AppDataSource.initialize().then(async() => {
        console.log('Database connected');
        const initialDataRequestController = new InitialDataRequestController();
        await initialDataRequestController.execute();
}).catch((err) => {
        console.error("Error during Data Source initialization:", err)
});

app.use(router);

app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT} !`)
});