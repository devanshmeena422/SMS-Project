const Subscription=require("../models/Subscription");

async function getSubscriptions(req,res){

    try{

        const subscriptions=await Subscription.find();

        res.json(subscriptions);

    }
    catch(error){

        res.status(500).json({message:"Error Fetching Subscriptions"});

    }

}

async function addSubscription(req,res){

    try{

        const subscription=new Subscription(req.body);

        await subscription.save();

        res.json({message:"Subscription Added Successfully"});

    }
    catch(error){

        res.status(500).json({message:"Error Adding Subscription"});

    }

}

module.exports={

    getSubscriptions,
    addSubscription

};