const express = require('express');
const {
	signUp,
	signIn,
	getAllFaculty
} = require('../controllers/userController');
const { isUserLoggedIn } = require('../middlewares/isUserLoggedIn');
const authRouter = express.Router();

authRouter.route('/signup').post(signUp);

authRouter.route('/signin').post(signIn);

authRouter.route('/faculty').get(isUserLoggedIn, getAllFaculty);

module.exports = authRouter;
