const express = require('express');
const router = express.Router();
router.use(express.json());

const {    
    findUserById,
    findAll,
    updateUserById,
    deleteUserById} = require('../controllers/user.controller')

/*Para obtener todos los usuarios*/
router.get('/api/users', findAll)

/*Para obtener un usuario por id*/
router.get('/api/users/:id', findUserById)

/*Para actualizar un usuario por id*/
router.put('/api/users/:id', updateUserById)

/*Para eliminar un usuario por id*/
router.delete('/api/users/:id', deleteUserById)

module.exports = router;