const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const departmentController = require('../controller/DepartmentController');
router.post("/department",departmentController.addDepartment)
router.get("/department/:id",departmentController.getDepartmentById)
module.exports = router;