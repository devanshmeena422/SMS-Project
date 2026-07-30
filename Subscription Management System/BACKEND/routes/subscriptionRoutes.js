const express=require("express");

const router=express.Router();

const subscriptionController=require("../controllers/subscriptioncontroller");

router.get("/",subscriptionController.getSubscriptions);

router.post("/",subscriptionController.addSubscription);

module.exports=router;