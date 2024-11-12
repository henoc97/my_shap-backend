"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkRole(role) {
    return function (req, res, next) {
        const userRoles = req.user._json["http://example.com/roles"] || [];
        if (userRoles.includes(role)) {
            return next();
        }
        else {
            return res.status(403).send("Forbidden");
        }
    };
}
//   // Exemple de route protégée pour un administrateur
//   app.get('/admin', checkRole(Role.ADMIN), (req, res) => {
//     res.send('Welcome to the admin area');
//  });
exports.default = checkRole;
