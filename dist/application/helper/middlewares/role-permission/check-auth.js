"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAuth() {
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            next;
        }
        else {
            res.redirect('/login');
        }
    };
}
// Route nécessitant une permission spécifique
// app.get('/manage-users', checkScope('manage:users'), (req, res) => {
//   res.send('Managing users');
// });
exports.default = checkAuth;
