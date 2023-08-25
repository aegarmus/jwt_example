const express = require('express');
const router = express.Router();
router.use(express.json());

const { auth_require } = require('../middlewares/auth.middleware')

const {
    createBootcamp,
    addUser,
    findById,
    findAll,
} = require('../controllers/bootcamp.controller')

/*Para crear un bootcamp*/
router.post('/api/bootcamps', auth_require, createBootcamp)

/*Para obtener todos los bootcamps*/
router.get('/api/bootcamps', findAll)

/*Para obtener un bootcamp por id*/
router.get('/api/bootcamps/:id', auth_require, findById)

/*Para agregar un usuario a un bootcamp*/
router.post('/api/bootcamps/adduser', auth_require, addUser)


module.exports = router;