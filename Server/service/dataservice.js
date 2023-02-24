//import db.js

const db=require("./db")

//import jsonwebtoken
const jwt = require('jsonwebtoken');


//database
userDetails = {
  richu: { username: "richu", email: "richu@gmail.com", password: 1111 },
  michu: { username: "michu", email: "michu@gmail.com", password: 2222 },
  abdu: { username: "abdu", email: "abdu@gmail.com", password: 3333 },
};

//register

register = (email, uname, pswd) => {

 return db.User.findOne({uname}).then(user=>{
    if(user){
      return {
        statusCode: 401,
        status: false,
        message: "user already exists"
      }
    }
    else{
      const newUser= new db.User({
        uname,
        email,
        pswd
      })

      newUser.save()

      return {
        statusCode: 200,
        status: true,
        message: " registration success"
      }

    }

  })
}





//   if (uname in userDetails) {
//     return {
//       statusCode: 401,
//       status: false,
//       message: "user already exists",
//     }
//   }
//    else {
//     userDetails[uname] = { uname, email: email, password: pswd };
//     console.log(userDetails);
//     return {
//       statusCode: 200,
//       status: true,
//       message: " registration success",
//     }
//   }
// }

 //login
 login=(uname, pswd)=>{

return db.User.findOne({uname,pswd}).then(user=>{
  if(user){
    const token = jwt.sign({currentUname:uname},'secretkey2022')
      return {
        statusCode: 200,
        status: true,
        message: " login success",
        currentUname:user.uname,
        currentPswd:user.pswd,
        token
      }

  }
  else{
    return {
      statusCode: 401,
      status: false,
      message: "Incorrect username or password",
    }   

  }
})
 }


   

//   if(uname in userDetails){
//     if(pswd == userDetails[uname]['password']){
//       const token = jwt.sign({currentUname:uname},'secretkey2022')
//       return {
//         statusCode: 200,
//         status: true,
//         message: " login success",
//         token
//       }

//     }else{
//      return {
//       statusCode: 401,
//       status: false,
//       message: "Incorrect password",
//     }   
//    }

//   }else{
//     return {
//       statusCode: 401,
//       status: false,
//       message: "Incorrect username",
//     } 
//   }
// }

module.exports = {
  register,
  login
}
