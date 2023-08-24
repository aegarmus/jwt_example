const express = require('express');
const router = express.Router();

router.use(express.json());

const { auth_require } = require('../middlewares/auth.middleware')

const {
    login,
    signup,
    readToken
} = require('../controllers/auth.controller')

router.post('/login', login)

router.post('/signup', signup)

router.post('/readToken', auth_require, readToken)

module.exports = router