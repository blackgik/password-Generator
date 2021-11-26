import {Router, Response, Request} from "express";
import paymentController from "../controllers/PaymentController";
const router = Router();



export default ()=> {
    router.post("/payments", paymentController.createPayment);
    
    return router
}