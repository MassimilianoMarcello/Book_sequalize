import db from '../models/index.js';

const User = db.users;

const userControllers = {
    getLoginForm: (req, res) => {
        
        res.status(200).render('layout', {
            title: 'Enter email and password',
            body: 'includes/user/loginForm',
          
        });
    },
   
    addUserRegistration: (req, res) => {}  ,
    update: (req, res) => {}                ,
    remove : (req, res) => {} ,
    getRegistrationForm : (req, res) => {} ,
    loginUser: (req, res) => {}    ,
    logoutUser: (req, res) => {}
  
};

export default userControllers;




