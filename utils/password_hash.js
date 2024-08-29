const bcrypt = require('bcrypt')
const hashPassword = async(password) =>{
    try{
        const saltRounds =10
        const salt  = await bcrypt.genSalt(saltRounds)
     const hashedPassword = await bcrypt.hash(password,salt)
     return hashedPassword
    }catch(err){
        throw new Error ("Oops Looks like something went wrong")
        }
}

const verifypassword = async(userPassword,currentPassword) =>{
    try{
     const verifyPassword =  bcrypt.compare(userPassword,currentPassword)
     if(verifyPassword){
        return "password correct"
     }else{
        return "password Incorrect"
     }
    }catch(err){
        throw Error("Password wrong")
    }
}

module.exports ={
    hashPassword,verifypassword
}