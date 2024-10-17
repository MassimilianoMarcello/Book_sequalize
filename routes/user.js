import express from 'express';
import controllers from '../controllers/user.js';


const router = express.Router();


// routes

const {getLoginForm,getRegistrationForm, loginUser,logoutUser, addUserRegistration,update,remove } =
    controllers;

// routes

router.post('/register', addUserRegistration);
router.put('/update/:id', update);
router.delete('/delete/:id', remove);
router.get('/register', getRegistrationForm);
router.post('/login', loginUser);
router.get('/login', getLoginForm);
router.get('/logout', logoutUser);

export default router;
