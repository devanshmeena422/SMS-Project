const mongoose=require("mongoose");

const subscriptionSchema=new mongoose.Schema({

    customerName:{
        type:String,
        required:true
    },

    planName:{
        type:String,
        required:true
    },

    startDate:{
        type:String,
        required:true
    },

    endDate:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Active"
    }

});

const Subscription=mongoose.model("Subscription",subscriptionSchema);

module.exports=Subscription;