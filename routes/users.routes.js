const express = require('express');
const router = express.Router();
router.use(express.json());

const { auth_require } = require('../middlewares/auth.middleware')

const {    
    findUserById,
    findAll,
    updateUserById,
    deleteUserById} = require('../controllers/user.controller')

/*Para obtener todos los usuarios*/
router.get('/api/users', auth_require, findAll)

/*Para obtener un usuario por id*/
router.get('/api/users/:id', auth_require, findUserById)

/*Para actualizar un usuario por id*/
router.put('/api/users/:id', auth_require, updateUserById)

/*Para eliminar un usuario por id*/
router.delete('/api/users/:id', auth_require, deleteUserById)

module.exports = router;