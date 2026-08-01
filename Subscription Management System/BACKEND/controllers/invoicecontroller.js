const Invoice=require("../models/Invoice");

async function getInvoices(req,res){

try{

const invoices=await Invoice.find();

res.json(invoices);

}

catch(error){

res.status(500).json({message:"Error Fetching Invoices"});

}

}

async function addInvoice(req,res){

try{

const invoice=new Invoice(req.body);

await invoice.save();

res.json({message:"Invoice Added Successfully"});

}

catch(error){

res.status(500).json({message:"Error Adding Invoice"});

}

}

module.exports={

getInvoices,
addInvoice

};