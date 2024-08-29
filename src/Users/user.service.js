//dservices

const { hashPassword } = require("../../utils/password_hash")
const { getAllUser, postUser, getUserLogin, getUserEmail } = require("./user.repository")


 const  handlegetAllUsers = async()=>{
    try{
        const user = await getAllUser()
           return user
    }catch(err){
        throw err('Failed to connect DB')
    }
    

}
const handleRegisterUser = async(user_name,password,user_email,full_name,date_of_birth) =>{
    try {
        const userEmail = await getUserEmail(user_email)
        if(userEmail.length >1){
            throw Error("Email has been used")
        }else{
            const   hashedPassword = await hashPassword(password)  
            const registerUser = await postUser(user_name,hashedPassword,user_email,full_name,date_of_birth)
            return registerUser
        }
    } catch (error) {
        throw Error(error)
    }
}
const handleLoginUser= async(user_email,password) =>{
    try{
        const userEmail = await getUserLogin(user_email)
        return userEmail
    }catch(err){
        return {status:200,message:"Account not Found"}
    }
}   

module.exports ={
    handlegetAllUsers,handleRegisterUser,handleLoginUser
}