import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';
import { DIContainer } from '../../application/containers/container-inversify/container';
import { AdminDTO } from '../dtos/admin.dto';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';

const adminRouter = Router();
const adminController = DIContainer.getContainer().get(AdminController);


adminRouter.use(validateDto(AdminDTO));

adminRouter.post('/', adminController.createAdmin);
adminRouter.get('/', adminController.getAllAdmins);
adminRouter.get('/:id', adminController.getAdminById);
adminRouter.get('/user/:userId', adminController.findAdminByUserId);
adminRouter.put('/:id', adminController.updateAdmin);
adminRouter.delete('/:id', adminController.deleteAdmin);

export default adminRouter;
