const express=require("express");

const router=express.Router();

const planController=require("../controllers/plancontroller");

router.get("/",planController.getPlans);

router.post("/",planController.addPlan);

module.exports=router;