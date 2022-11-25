//controller import
const userController = require('../controller/userController');
const express = require('express');
const Router = express.Router();
Router.post('/user',userController.addUser)
Router.get('/user',userController.getAllRecord)
Router.get('/user/:id',userController.getRecordById)
Router.delete('/user/:id',userController.delteUser)
module.exports = Router;