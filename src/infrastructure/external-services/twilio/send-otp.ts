import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendOtpWithTwilio(phone: string) {
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID ?? ''; // Créez un service Verify dans Twilio
    try {
        const result = await client.verify.v2.services(serviceSid).verifications.create({
            to: phone,
            channel: 'sms', // ou 'call' pour un appel vocal
        });

        console.log(`OTP envoyé à ${phone}`);
        return result.sid; // ID de vérification pour le suivi
    } catch (error) {
        console.error(`Erreur lors de l'envoi de l'OTP à ${phone}:`, error);
        throw error; // Relancer l'erreur pour un traitement ultérieur
    }
}

export { sendOtpWithTwilio };
// sendOtpWithTwilio("+22897045559")