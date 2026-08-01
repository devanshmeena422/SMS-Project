const mongoose=require("mongoose");

const invoiceSchema=new mongoose.Schema({

invoiceId:{
type:String,
required:true
},

userName:{
type:String,
required:true
},

planName:{
type:String,
required:true
},

amount:{
type:Number,
required:true
},

invoiceDate:{
type:String,
required:true
}

});

module.exports=mongoose.model("Invoice",invoiceSchema);