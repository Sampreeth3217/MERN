// const jwd=require('jsonwebtoken');

// const tokenVerify=(req,res,next)=>
//     {
//         const bearerToken=req.headers.authorization;
//         if(bearerToken===undefined)
//         {
//             res.send({message:"Unauthorized access"});
//         }
//         bearerToken.split(' ')[1]
//         try {
//            let decode=jwt.verify(token,'sampreeth');
//            next();
//         } catch (err) {
//             res.send({message:"token expired please login again"});
//         }
//     };

// module.exports = tokenVerify;


// const jwt = require('jsonwebtoken');

// const tokenVerify = (req, res, next) => {
//   const bearerToken = req.headers.authorization;
//   if (!bearerToken) {
//     return res.send({ message: "Unauthorized access" });
//   }
  
//   const token = bearerToken.split(' ')[1];
//   try {
//     let decode = jwt.verify(token, 'sampreeth');
//     next();
//   } catch (err) {
//     return res.send({ message: "Token expired, please login again" });
//   }
// };

// module.exports = tokenVerify;


const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.send({ message: "Unauthorized access" });
  }

  const token = bearerToken.split(' ')[1];
  try {
    jwt.verify(token, 'sampreeth');
    next();
  } catch (err) {
    return res.send({ message: "Token expired, please login again" });
  }
};

module.exports = tokenVerify;

