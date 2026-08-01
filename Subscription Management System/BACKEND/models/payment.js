const mongoose=require("mongoose");

const paymentSchema=new mongoose.Schema({

userName:{
type:String,
required:true
},

invoiceId:{
type:String,
required:true
},

amount:{
type:Number,
required:true
},

paymentDate:{
type:String,
required:true
},

status:{
type:String,
default:"Paid"
}

});

module.exports=mongoose.model("Payment",paymentSchema);