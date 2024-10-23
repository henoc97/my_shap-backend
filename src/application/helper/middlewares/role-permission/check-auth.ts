import { Request, Response, NextFunction } from "express";

function checkAuth() {
    return function (req: Request, res: Response, next: NextFunction) {
        if (req.isAuthenticated()) {
            next;
        } else {
            res.redirect('/login');
        }
    };
}

// Route nécessitant une permission spécifique
// app.get('/manage-users', checkScope('manage:users'), (req, res) => {
//   res.send('Managing users');
// });

export default checkAuth;
