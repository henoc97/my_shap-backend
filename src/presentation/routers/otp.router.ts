import { Router } from 'express';
import { OTPController } from '../controllers/otp.controller';

const otpRouter = Router();
const otpController = new OTPController();

otpRouter.get('/transaction', otpController.getTransactionOtp);
otpRouter.get('/init/:contact', otpController.getInitUserOtp);


export default otpRouter;
