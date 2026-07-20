const mongoose=require("mongoose");

function connectDatabase(){

    mongoose.connect(process.env.MONGO_URI)
    .then(function(){

        console.log("Database Connected");

    })
    .catch(function(error){

        console.log(error);

    });

}

module.exports=connectDatabase;