import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true
    }
})

export default mongoose.model('meal',userSchema)