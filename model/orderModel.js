import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    street:{
        type:String,
        required:true,
        trim:true,
    },
    postalcode:{
        type:Number,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true,
    },
    orderItem:[{
        type : mongoose.ObjectId,
        ref : 'meal'
    }]
})

export default mongoose.model('order',userSchema)