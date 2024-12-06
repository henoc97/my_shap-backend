import twilio from 'twilio';
import dotenv from 'dotenv';
import logger from '../../../application/helper/logger/logRotation';

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function validateOtpWithTwilio(phone: string, otp: string) {
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID ?? '';
    try {
        const result = await client.verify.v2.services(serviceSid).verificationChecks.create({
            to: phone,
            code: otp,
        });

        if (result.status === 'approved') {
            console.log("OTP validé avec succès !", result.status);
            return true;
        } else {
            console.log("Échec de la validation OTP !", result.status);
            return false;
        }
    } catch (error) {
        console.log("Erreur lors de la validation OTP :", error);
        return false;
    }
}

export { validateOtpWithTwilio };


// validateOtpWithTwilio("+22897045559", "708950")