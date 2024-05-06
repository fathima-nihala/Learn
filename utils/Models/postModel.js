import mongoose, { Schema, models } from "mongoose";

const postSchema =new Schema({
    title:String,
    description:String,
    image:String,
    created_at:String
}, { toJSON: { virtuals: true} });

postSchema.virtual('short_description').get(function(){
    return this.description.substr(0,40)+'...'
});

postSchema.virtual('created_at_formated').get(function(){
   return changeDateFormate(this.created_at)
})

function changeDateFormate(data_str){
    const date = new Date(data_str);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

module.exports =  models.post ||  mongoose.model('post',postSchema)