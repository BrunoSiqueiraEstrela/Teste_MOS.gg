import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import  './config/index';
import { User } from "./entities/User";
import { Channel } from "./entities/Channel";
import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { AppDataSource } from "./config/index";
import { router } from "./Routes";
import { RequestTwitchChannelDataService } from "./services/RequestTwitchChannelDataService";
import { RequestTwitchUserDataService } from "./services/RequestTwitchUserDataService";

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(async() => {

    const requestTwitchChannelDataService = new RequestTwitchUserDataService();
    const data = await requestTwitchChannelDataService.getTwitchUserData('49498288');  
    console.log("Data: ",data); 
})
.catch((err) => {
        console.error("Error during Data Source initialization:", err)
});
app.use(router);
app.listen(4000, () => {
        console.log("Server started on port 4000!")
        });