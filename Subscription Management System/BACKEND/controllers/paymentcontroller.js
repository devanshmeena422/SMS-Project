const Payment=require("../models/Payment");

async function getPayments(req,res){

try{

const payments=await Payment.find();

res.json(payments);

}

catch(error){

res.status(500).json({message:"Error Fetching Payments"});

}

}

async function addPayment(req,res){

try{

const payment=new Payment(req.body);

await payment.save();

res.json({message:"Payment Added Successfully"});

}

catch(error){

res.status(500).json({message:"Error Adding Payment"});

}

}

module.exports={

getPayments,
addPayment

};