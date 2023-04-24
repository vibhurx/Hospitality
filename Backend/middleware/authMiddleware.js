require('dotenv').config();
const jwt = require("jsonwebtoken")
const Customer = require("../models/CustomerDBModel")

const authMiddleware = async(req,res,next)=>{
   if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1]){
      const token = req.headers.authorization.split(' ')[1];
      // console.log(token);

      const decode = await jwt.verify(token,process.env.JWT_SECRET)
      // console.log(decode);
      const user = await Customer.findOne({where : {customerId: decode.user.customerId}})
      // console.log("User :- ",user.dataValues);
      try {
         if(!user){
            res.status(401).json({Error: 'Unauthorized !'})
            return;
         };
         req.user = user
         next();
      } catch (error) {
         res.status(401).json({Error: 'Error Occured !'})
      }
   }else{
      res.status(401).json({Error: 'You need to login first !'})
      return;
   }
}

module.exports = authMiddleware