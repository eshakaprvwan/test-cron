
import dailyDataSchema from "../modules/dailyData/dailydata.schema.js";
import { model } from "mongoose";

export const createDailyDataDocument = async() => {
    try{
        const currentDate = new Date();
        const collectionName = `${currentDate.toISOString().split('T')[0]}`;
        const dailyDataModel = model (collectionName, new dailyDataSchema());
        await dailyDataModel.create({ day: currentDate });
        console.log(`Document created in collection : ${collectionName}`)
    }catch(e){
        console.log(e);
        throw e;
    }
 
}