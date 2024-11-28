import { validateOtpWithTwilio } from "../../../infrastructure/external-services/twilio/validate-otp";
import logger from "../logger/logRotation";
import { Response } from "express";



export async function validateOtpCreate(req: any, res: Response, contact: string, callback: (...params: any[]) => Promise<any>) {
    const isValid = await validateOtpWithTwilio(contact, req.dtoInstance.otp);
    if (isValid) {
        const result = await callback();
        res.status(201).json(result);
    } else {
        logger.error(JSON.stringify({ error: "otp invalide" }));
        res.status(403).json({ error: "otp invalide" });
    }
}