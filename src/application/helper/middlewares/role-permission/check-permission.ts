function checkScope(scope: string) {
  return function (req: any, res: any, next: any) {
    const permissions = (req.user as any).scope || [];
    if (permissions.includes(scope)) {
      return next();
    } else {
      return res.status(403).send("Insufficient permissions");
    }
  };
}

// Route nécessitant une permission spécifique
// app.get('/manage-users', checkScope('manage:users'), (req, res) => {
//   res.send('Managing users');
// });

export default checkScope;
