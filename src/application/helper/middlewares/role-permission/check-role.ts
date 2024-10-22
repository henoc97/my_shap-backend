import { Role } from "../../../../domain/enums/role.enum";

function checkRole(role: Role) {
  return function (req: any, res: any, next: any) {
    const userRoles = (req.user as any)._json["http://example.com/roles"] || [];
    if (userRoles.includes(role)) {
      return next();
    } else {
      return res.status(403).send("Forbidden");
    }
  };
}

//   // Exemple de route protégée pour un administrateur
//   app.get('/admin', checkRole(Role.ADMIN), (req, res) => {
//     res.send('Welcome to the admin area');
//  });

export default checkRole;
