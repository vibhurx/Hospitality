require('dotenv').config();
const Customer = require("../models/CustomerDBModel")
const bcrypt = require("bcrypt")
const saltRounds = 10
const WELCOME_LOGIC_APP_URL = process.env.WELCOME_LOGIC_APP_URL
const axios = require('axios');
const jwt = require("jsonwebtoken")


const customerSignUp = async(req,res)=>{
   const password = await bcrypt.hash(req.body.password,saltRounds);
   const user = {...req.body, password};
   await Customer.create(user);
   // await sendWelcomeMail(user);
   res.send(user)
}

const sendWelcomeMail = async(user)=>{
      await axios.post(WELCOME_LOGIC_APP_URL,{
         "to": user.mailId,
         "subject":"Welcome to Heritage Hotel",
         "email_body":`Dear ${user.name} ,<br><br>
Thank you for choosing us,we have varities for rooms at our XYZ Hotel at optimal prices.<br><br>
Best regards,<br>
Heritage Team`
      }).then((result) => {
         console.log("Mail Sended!");
      }).catch((err) => {
         console.log(`Error occured : ${err}`);
      });
}

const customerLogin = async(req,res)=>{
   const user = await Customer.findOne({where : {mailId : req.body.mailId}});
   if(!user){
      res.status(404).json({error: "User Not Found !"})
   }
   else if(! await bcrypt.compare(req.body.password, user.password)){
      res.status(401).json({error : 'Incorrect Password !'});
   }
   else{
      const token = await jwt.sign({user},process.env.JWT_SECRET)
      //
      res.status(400).json({user,access_token:token})
   }
}

const removeCustomer = async(req,res)=>{
   const email = req.body.mailId;
   await Customer.destroy({
      where : {
         mailId : email
      }
   })
   res.status(200).send("Customer Removed !")
}

module.exports = {customerSignUp, removeCustomer, customerLogin}

