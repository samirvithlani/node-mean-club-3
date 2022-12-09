const express = require('express');
const router = express.Router();
const uploadController = require('../controller/UploadController');
router.post('/upload',uploadController.uploadFile);
router.get('/getdata',uploadController.getAlldata);

module.exports = router;