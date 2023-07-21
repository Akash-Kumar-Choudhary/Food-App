import Meal from '../model/mealModel.js'

export const mealPostController = async (req, res) => {
  try {
    const meal = new Meal(req.body);
    const meal1 = await meal.save();
    res.send({
        success : true,
        message: "Meal added successfully",
        meal1
    });
  } catch (error) {
    res.status(400).send({
        success: false,
        message : 'something went wrong',
        error
    });
  }
};

export const mealGetController = async(req , res) => {
    try{
        const meal=await Meal.find({})
        res.send(meal)
    }catch(error){
        res.status(500).send({
            success:false,
            message:'someting went wrong'
        })
    }
}