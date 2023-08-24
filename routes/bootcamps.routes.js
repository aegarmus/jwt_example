const express = require('express');
const router = express.Router();
router.use(express.json());

const {
    createBootcamp,
    addUser,
    findById,
    findAll,
} = require('../controllers/bootcamp.controller')

/*Para crear un bootcamp*/
router.post('/api/bootcamps', createBootcamp)

/*Para obtener todos los bootcamps*/
router.get('/api/bootcamps', findAll)

/*Para obtener un bootcamp por id*/
router.get('/api/bootcamps/:id', findById)

/*Para agregar un usuario a un bootcamp*/
router.post('/api/bootcamps/adduser', addUser)


module.exports = router;