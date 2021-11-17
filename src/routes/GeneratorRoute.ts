import {Router, Response, Request} from "express";
import PasswordGenerator from "../controllers/PasswordGenerator";
const router = Router();



export default ()=> {
    router.post("/generate-password", PasswordGenerator.createPassword)
    return router
}