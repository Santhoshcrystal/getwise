const express = require('express');
var router = express.Router();

var loginController = require('../v1/controller/login');

const { catchErrors } = require('../../helpers/errorHandler');

const { verifyReq } = require('../../helpers/authHelper');

router.post('/login', loginController.login);

module.exports = router;
