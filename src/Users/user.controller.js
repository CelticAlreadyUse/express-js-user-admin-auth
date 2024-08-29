const express = require('express')  //app but mini app
const router = express.Router() 
const bcrypt = require('bcrypt')
const mysql = require('../../model/Users')
const response = require('../../utils/response')
const { handlegetAllUsers, handleRegisterUser, handleLoginUser } = require('./user.service')
const { emailValidation, DateValidation } = require('../../utils/validation')
const { getUserEmail } = require('./user.repository')
//response handling
router.get('/',async(req,res)=>{
    try{
        const user = await handlegetAllUsers()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({error:"failed to retrieve users"})
    }
})

router.post('/signup',async(req,res)=>{
    try {
    const user_name = String( req.body.user_name)
    const password = String( req.body.password)
    const confirmPassword = String(req.body.confirm_password)
    const user_email = String( req.body.user_email)
    const full_name = String( req.body.full_name)
        const date_of_birth = String(req.body.date_of_birth)
           if(typeof user_name !== 'string' || 
            typeof password !== 'string' ||
            typeof confirmPassword !== 'string' ||
            typeof user_email !== 'string'||
            typeof full_name !== 'string' ||
            typeof date_of_birth !== 'string'      
           ){
                res.status(400).json({message:"type data wrong"})
            }else{
                if(password.length < 8){
                    res.status(201).json({message:`Password must be 8 characters `,})
                }
                    if(confirmPassword !== password){
                        res.status(200).json({message:"Confirm Password is wrong"})
                    }  
                    if(!emailValidation(user_email)){
                        res.status(201).json({message:"are you sure your email is correct?"})
                    }if(!DateValidation(date_of_birth)){
                        res.status(400).json({message:"Wrong Tipe date format,YYY-MM-DD"})
                    }
                  else{
                        const signUser =await handleRegisterUser(user_name,password,user_email,full_name,date_of_birth)
                        response(200,{user_name,user_email},`Welcome! ${user_name}`,res)
                        console.log(signUser)
                    }
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

router.post('/login',async(req,res)=>{
    const userEmail = String(req.body.user_email)
    const password = String(req.body.password)
    try {
        const userLogin = await handleLoginUser(userEmail,password)
        res.json(userLogin)
        
    }catch (error) {
        res.send(error)
    }  
    

    
})
router.get('/passtest',async(req,res)=>{
    try {
        const user_email="wahyu@gmail.com"
        userEmail = getUserEmail()
    } catch (error) {
        
    }

    res.send(`${hashedPassword}`)
})

module.exports =  router