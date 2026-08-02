const Plan=require("../models/Plan");

async function getPlans(req,res){

    try{

        const plans=await Plan.find();

        res.json(plans);

    }
    catch(error){

        res.status(500).json({message:"Error Fetching Plans"});

    }

}

async function addPlan(req,res){

    try{

        const plan=new Plan(req.body);

        await plan.save();

        res.json({message:"Plan Added Successfully"});

    }
    catch(error){

        res.status(500).json({message:"Error Adding Plan"});

    }

}

module.exports={

    getPlans,
    addPlan

};