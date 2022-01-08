const User = require ('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    getAllUsers:async (req, res) => {
        let error = null
        let response = []
        try{
           const users = await User.find()
           users.map( User =>{
              return response.push({firstName:User.firstName, lastName:User.lastName, email:User.email, image:User.image, _id:User._id, admin:User.admin, google: User.google, facebook: User.facebook })
            })
            res.json({success: true, response: response})
        }catch(error){
            res.json({success: false, response: null})
        }
    },
    addNewUser : (req, res) => {
        const {firstName, lastName, email, password, image, birthday, google, facebook, admin, favourites} = req.body
        let cryptPass = bcryptjs.hashSync(password)
        const newUser = new User ({firstName, lastName, email, password:cryptPass, image, google, facebook, admin, favourites})// , birthday
        User.findOne({email:email})
        .then((user)=>{
            if(user){
                throw new Error ('This email is already in use')
            }else{
                newUser.save()
                .then((newUser) =>{
                    const token = jwt.sign({...newUser}, process.env.SECRETKEY)
                    res.json({success:true, response:{firstName:newUser.firstName ,lastName:newUser.lastName ,password:newUser.password , image:newUser.image ,google:newUser.google ,admin:newUser.admin ,facebook:newUser.facebook ,favourites:newUser.favourites , token, _id:newUser._id}, error:null})
                }) 
                .catch((error) => res.json({success:false, response:error}))
            }
        })
        .catch((error) => res.json({success:false, response:null, error: error.message}))
    },
    logInUser : (req, res) => {
        const { email, password, flagGoogle} = req.body
        User.findOne({email:email})
        .then((user) =>{
            if(!user) throw new Error('Email/password incorrect')
            if(user.google && !flagGoogle) throw new Error ('You created your account with google, please log with them')
            let correctPass = bcryptjs.compareSync(password, user.password)
            if(!correctPass) throw new Error('Email/password incorrect')
            const token = jwt.sign({...user}, process.env.SECRETKEY)
            res.json({ success:true, response:{token, firstName:user.firstName, image:user.image,  _id:user._id}})
         })
        .catch ((error) => res.json({success:false, error:error.message}))
    },
    deleteUser :(req, res) =>{
        User.findOneAndDelete({_id:req.params.id})
        .then(() =>res.json({success:true}))
        .catch((error) => res.json({success:false, response:error.message}))
    },
    editUser:(req, res) =>{
        User.findOneAndUpdate({_id:req.params.id}, {...req.body})
        .then(() => res.json({success:true}))
        .catch((error) => res.json({success:false, response:error.message}))
    },
    verifyToken : (req, res) => {
        res.json({firstName: req.user.firstName, image:req.user.image, _id:req.user._id})
    }
}

module.exports= userController