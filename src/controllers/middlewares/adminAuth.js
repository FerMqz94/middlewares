const adminAuth = (req, res, next) => {
const authorizedUsers = ['Ada', 'Greta', 'Vim', 'Tim'];
const user = req.query.user;

  if (authorizedUsers.includes(user)) {    
    req.isAdmin = true; 
    next(); 
  } else {
    res.send('No tienes los privilegios para ingresar');
  }
};

