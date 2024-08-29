//databases
const Users = require('../../model/Users')

const getUserEmail = (user_email) =>{
    return new Promise((resolve,reject)=>{
        const query = `SELECT user_email FROM users WHERE user_email = '${user_email}'`
        Users.query(query,(err,result)=>{
            if(err) return reject(err); return resolve(result)
        })
    })
}
    const getAllUser = ()=>{
        return new Promise((resolve,reject)=>{
            const query = `SELECT * FROM users`
            Users.query(query,(err,result)=>{
                if(err) return reject(err);resolve(result)
            })
        })
    }
    const postUser = (user_name,password,user_email,full_name,date_of_birth) =>{
        return new Promise((resolve,reject)=>{
        const sql = `INSERT INTO users (user_name,password,user_email,full_name,date_of_birth) VALUES ('${user_name}','${password}','${user_email}','${full_name}','${date_of_birth}')`
           Users.query(sql,(err,result)=>{
            if(err)reject("Email has been used");resolve(result)
           })
        })
    }
    const getUsersByEmail = (user_email,) =>{
        return new Promise((resolve,reject)=>{
        const sql = `SELECT * FROM users WHERE user_email = '${user_email}'`
        Users.query(sql,(err,result)=>{
            if(err) return reject(err);return resolve(result)
        })
        })  
        }
module.exports ={
    getAllUser,postUser,getUsersByEmail,getUserEmail
}