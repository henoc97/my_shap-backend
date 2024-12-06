import { Request, Response } from 'express';
import { sendOtpWithTwilio } from '../../infrastructure/external-services/twilio/send-otp';


export class OTPController {

    constructor() { }


    public async getTransactionOtp(req: any, res: Response): Promise<void> {
        try {
            const contact = `+${req.user.countryCode}${req.user.contact}`
            await sendOtpWithTwilio(contact);
            res.status(200).json({
                "message": `OPT envoyé avec succès à ${contact}`
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async getInitUserOtp(req: any, res: Response): Promise<void> {
        try {
            // contact must be : +...... (followed by his countryCode)
            const contact = req.params.contact;
            await sendOtpWithTwilio(contact);
            res.status(200).json({
                "message": `OPT envoyé avec succès à ${contact}`
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
}