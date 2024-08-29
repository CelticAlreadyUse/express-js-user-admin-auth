//dservices

const { hashPassword, verifypassword } = require("../../utils/password_hash")
const { getAllUser, postUser, getUserEmail, getUsersByEmail } = require("./user.repository")


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
        const User = await getUsersByEmail(user_email)
        const userPassword = User.map(user=>user.password)
        const match = await verifypassword(password,...userPassword)
        console.log(match)
        return User
    }catch(err){
        return {status:200,message:`Account not Found ${err}`}
    }
}   

module.exports ={
    handlegetAllUsers,handleRegisterUser,handleLoginUser
}