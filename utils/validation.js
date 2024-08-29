const emailValidation = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
const DateValidation = (date_of_birth)=>{
    //Format -> YYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    return dateRegex.test(date_of_birth)
}
module.exports = {
    emailValidation,
    DateValidation
}