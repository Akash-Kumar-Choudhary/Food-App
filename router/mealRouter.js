import express from "express";
import { mealGetController, mealPostController } from "../controller/mealController.js";
import { getController, orderController } from "../controller/OrderController.js";

const router = new express.Router();

router.post('/meal' , mealPostController)
router.get('/meal' , mealGetController)
router.post('/order' , orderController)
router.get('/order' , getController)
export default router