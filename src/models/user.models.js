import { Schema } from "mongoose";
import mongoose from "mongoose";


const userSchema=new Schema(
    {
        avatar: {
            type:{
                url:String,
                localPath:String,
            },
            default:{
                url:`give anu url`,
                localPath: ""
            }

        },
        username: {
            type:String,
            required: true,
            unique : true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullName:{
            type:String,
            trim:true
        },
        password: {
            type:String,
            required:[true, "Password is required"]
        },
        isEmailVarified: {
            type:Boolean,
            default: false
        },
        refreshToken : {
            type:String
        },
        forgotPasswordToken :{
            type:String
        },
        forgotPasswordExpiry :{
            type:Date
        },
        emailVerificationToken :{
            type:String
        },
        emailVerificationExpiry:{
            type:Date
        }
    },{
        timestamps:true
    }
)



export const User=mongoose.model("User",userSchema)