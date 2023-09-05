import { Schema } from "mongoose";

class dailyDataSchema extends Schema {
    constructor(){
        super({
            day : {
                type : Date,
                required : true
            }, 
        })
    }
}; 


export default dailyDataSchema;