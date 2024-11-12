"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkScope(scope) {
    return function (req, res, next) {
        const permissions = req.user.scope || [];
        if (permissions.includes(scope)) {
            return next();
        }
        else {
            return res.status(403).send("Insufficient permissions");
        }
    };
}
// Route nécessitant une permission spécifique
// app.get('/manage-users', checkScope('manage:users'), (req, res) => {
//   res.send('Managing users');
// });
exports.default = checkScope;
