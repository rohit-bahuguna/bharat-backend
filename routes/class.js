const express = require('express');
const {
	createClass,
	createClassesFromCSV,
	getAllClasses
} = require('../controllers/classController');
const { customRole } = require('../middlewares/customRoles');
const classRouter = express.Router();
const { isUserLoggedIn } = require('../middlewares/isUserLoggedIn');

classRouter.route('/create').post(isUserLoggedIn, customRole, createClass);

classRouter
	.route('/createfromcsv')
	.post(isUserLoggedIn, customRole, createClassesFromCSV);

classRouter.route('/').get(isUserLoggedIn, getAllClasses);

module.exports = classRouter;
