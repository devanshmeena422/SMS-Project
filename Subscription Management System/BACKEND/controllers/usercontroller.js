const User=require("../models/User");

async function getUsers(req,res){

    try{

        const users=await User.find();

        res.json(users);

    }
    catch(error){

        res.status(500).json({message:"Error Fetching Users"});

    }

}

async function addUser(req,res){

    try{

        const user=new User(req.body);

        await user.save();

        res.json({message:"User Added Successfully"});

    }
    catch(error){

        res.status(500).json({message:"Error Adding User"});

    }

}

module.exports={

    getUsers,
    addUser

};