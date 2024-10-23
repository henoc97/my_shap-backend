import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';
import { container } from '../../application/containers/main.container';

const adminRouter = Router();
const adminController = container.get(AdminController);

adminRouter.post('/', adminController.createAdmin);
adminRouter.get('/', adminController.getAllAdmins);
adminRouter.get('/:id', adminController.getAdminById);
adminRouter.get('/user/:userId', adminController.findAdminByUserId);
adminRouter.put('/:id', adminController.updateAdmin);
adminRouter.delete('/:id', adminController.deleteAdmin);

export default adminRouter;
