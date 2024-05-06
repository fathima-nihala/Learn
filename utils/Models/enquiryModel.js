import mongoose, { models } from "mongoose";
import { Schema } from "mongoose";

const enquirySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

module.exports = models.Enquiry || mongoose.model('Enquiry',enquirySchema)