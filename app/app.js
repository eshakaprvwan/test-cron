import express from "express";
import { connectToMongo } from "./connections /mongo.connections.js";
import cron from 'node-cron'
import dailyDataSchema from "./modules/dailyData/dailydata.schema.js";
import { createDailyDataDocument } from "./utility/cronUtilities.js";

export const startServer = async () => {
    try {
        const app = express();

        await connectToMongo();
        // registerRoutes(app);
        cron.schedule('* * * * *', async () => {
            console.log("Running cron")
            await createDailyDataDocument();
        });
        const { PORT } = process.env;
        app.listen(
            PORT,
            () => console.log(`SERVER STARTED ON PORT: ${PORT}`)
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}