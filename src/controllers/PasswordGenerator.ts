import { Request, Response } from "express";
import PasswordGeneratorService from "./../services/passwordGeneratorService"
import appResponse from "./../../lib/appResponse"

class PasswordGenerator {
  async createPassword(req: Request, res: Response) {
    type pageUrl = {
      websiteName:string
      stringLength: number
    }
    const body: pageUrl = req.body;
      
    const generatedPassword = await PasswordGeneratorService.createPassword(body.websiteName, body.stringLength)

    res.send(appResponse("created Password succesfully", generatedPassword))
  }
}

export default new PasswordGenerator()