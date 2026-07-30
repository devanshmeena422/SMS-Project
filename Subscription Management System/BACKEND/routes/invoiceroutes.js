const express=require("express");

const router=express.Router();

const invoiceController=require("../controllers/invoicecontroller");

router.get("/",invoiceController.getInvoices);

router.post("/",invoiceController.addInvoice);

module.exports=router;