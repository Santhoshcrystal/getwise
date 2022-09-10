const express = require('express');
var router = express.Router();

const multer = require("multer");

var loginController = require('../v1/controller/login');
var signController = require('../v1/controller/signup');
var blogController = require('../v1/controller/blog');

const { catchErrors } = require('../../helpers/errorHandler');

const { verifyReq } = require('../../helpers/authHelper');

var storage = multer.memoryStorage({
    destination: function(req, file, callback) {
        callback(null, '');
    }
});

var multipleUpload = multer({ storage: storage }).array('file');

router.post('/login', loginController.login);

router.post('/signup', signController.createAccount);

router.post('/blog', verifyReq, multipleUpload, blogController.newBlog);

router.delete('/blog', verifyReq, blogController.deleteBlog);

router.get('/blog', blogController.getBlogList);

router.get('/blog/:Id', verifyReq, blogController.blogById);

router.get('/blog/user/:Id', verifyReq, blogController.blogByUserId);

module.exports = router;
