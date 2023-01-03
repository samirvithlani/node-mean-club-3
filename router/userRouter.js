//controller import
const userController = require('../controller/userController');
const express = require('express');
const Router = express.Router();
const userSchemaValidation = require('../util/UserSchemaValidaition');
const Zodmiddleware = require('../middleware/Zodmiddleware');
const authMiddleware = require('../middleware/authMiddleware');
Router.post('/user',Zodmiddleware.validate(userSchemaValidation),userController.addUser)

Router.get('/user',authMiddleware.authenticate,userController.getAllRecord)
Router.get('/user/:id',userController.getRecordById)
Router.delete('/user/:id',userController.delteUser)
Router.put('/user/:id',userController.updateUser)
Router.post('/login',userController.LoginUser)
Router.get('/email',userController.getRecordByEmail)
module.exports = Router;