const { mongoose } = require('../config/db');

let userSchema ={
                   name:String,
                   email:String,
                   username:{
                        type:String,
                        required:true
                   },
                   password_hash:String,
                   role:String
                };
const User = mongoose.model('User',userSchema );

exports.User= User;