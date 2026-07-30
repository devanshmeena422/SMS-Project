const User=require("../models/User");

async function registerUser(req,res){

    try{

        const{name,email,password}=req.body;

        const userExists=await User.findOne({email});

        if(userExists){

            return res.status(400).json({message:"User Already Exists"});

        }

        const newUser=new User({

            name,
            email,
            password

        });

        await newUser.save();

        res.status(201).json({message:"Registration Successful"});

    }

    catch(error){

        res.status(500).json({message:"Registration Failed"});

    }

}

async function loginUser(req,res){

    try{

        const{email,password}=req.body;

        const user=await User.findOne({email});

        if(!user){

            return res.status(404).json({message:"User Not Found"});

        }

        if(user.password!==password){

            return res.status(401).json({message:"Invalid Password"});

        }

        res.status(200).json({

            message:"Login Successful",

            user

        });

    }

    catch(error){

        res.status(500).json({message:"Login Failed"});

    }

}

module.exports={

    registerUser,

    loginUser

};