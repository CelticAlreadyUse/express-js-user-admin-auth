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

const verifypassword = (userPassword) =>{
    bcrypt.compare(userPassword,currentPassword,(err,result)=>{
        err ? console.log(err) : console.log("password match")
    })
}

module.exports ={
    hashPassword,verifypassword
}