const { User } = require('../models/index.model')

// Obtener todos los Usuarios
const findAll = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener todos los Usuarios" });
    }

}

// Obtener un Usuario por id
const findUserById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: "Ingresa un id" });
        }

        const userId = parseInt(req.params.id, 10);

        if (isNaN(userId) || userId <= 0) {
            return res.status(400).json({ message: "ID de usuario inválido" });
        }

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.json(user);
    } catch (error) {
        return res.status(500).json({ message: "Error al buscar usuario por ID" });
    }
};



// Actualizar un Usuario por id
const updateUserById = async (req, res) => {
    await User.update(req.body, {
        where: { id: req.params.id }
    })
    return res.json({ success: 'Se ha modificado el usuario' })
}

// Eliminar un Usuario por id
const deleteUserById = async (req, res) => {
    await User.destroy({
        where: { id: req.params.id }
    })
    return res.json({ success: 'Se ha eliminado el usuario' })
}

module.exports = {
    findUserById,
    findAll,
    updateUserById,
    deleteUserById
}
 