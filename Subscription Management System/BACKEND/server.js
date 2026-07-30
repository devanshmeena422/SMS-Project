const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(function(){

    console.log("Database Connected");

})
.catch(function(error){

    console.log(error);

});

app.get("/",function(req,res){

    res.send("Subscription Management System Backend Running");

});

const authRoutes=require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");
const planRoutes=require("./routes/planRoutes");
const subscriptionRoutes=require("./routes/subscriptionRoutes");
const paymentRoutes=require("./routes/paymentRoutes");
const invoiceRoutes=require("./routes/invoiceRoutes");

app.use("/auth",authRoutes);
app.use("/users",userRoutes);
app.use("/plans",planRoutes);
app.use("/subscriptions",subscriptionRoutes);
app.use("/payments",paymentRoutes);
app.use("/invoices",invoiceRoutes);

const PORT=process.env.PORT||5000;

app.listen(PORT,function(){

    console.log("Server Running On Port "+PORT);

});