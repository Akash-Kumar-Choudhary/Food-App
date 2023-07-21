import orderModel from '../model/orderModel.js'
import Order from '../model/orderModel.js'
export const orderController = async(req , res) => {
    try{
        const {user , orderedItem} = req.body
        const order1 = new Order({
            name:user.name,
            street:user.street,
            postalcode:user.postalcode,
            city:user.city,
            orderItem: orderedItem
        })
        const detail = await order1.save()
        res.status(200).send({
            success : true,
            message : 'successfully ordered',
            detail
        })
        

    }catch(error){
        res.status(500).send({
            success: false,
            message:'Error in Getting Order',
            error
        })
    }
}
export const getController = async(req , res) => {
    try{
        const data = await orderModel.find({}).populate('orderItem')
        res.status(200).send({
            success:true,
            orderData: data
        })
    }catch(error){
        res.status(500).send({
            success:false,
            message:'Error while getting'
        })
    }
}