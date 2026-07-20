const mongoose=require("mongoose");

const planSchema=new mongoose.Schema({

    planName:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    duration:{
        type:String,
        required:true
    }

});

const Plan=mongoose.model("Plan",planSchema);

module.exports=Plan;