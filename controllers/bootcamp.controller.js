const { Bootcamp } = require('../models/index.model')
const { User } = require('../models/index.model')

// Crear un nuevo Bootcamp
const createBootcamp = async (req, res) => {
    try {
        if (!req.body.title || !req.body.cue || !req.body.description) {
            return res.status(400).json({ message: "Debe ingresar todos los campos" })
        }
        const bootcamp = await Bootcamp.create(req.body)
        return res.json(bootcamp)
    } catch (error) {
        return res.status(400).json({ message: error.errors[0].message })
    }
}

// Agregar un Usuario al Bootcamp
const addUser = async (req, res) => {
    try {
        if (!req.body.bootcampId || !req.body.userId) {
            return res.status(400).json({ message: "Debe ingresar todos los campos" })
        }
        const bootcampId = req.body.bootcampId;
        const userId = req.body.userId;

        const bootcamp = await Bootcamp.findByPk(bootcampId);
        if (!bootcamp) {
            return res.status(404).json({ message: "Bootcamp no encontrado" });
        }

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        await bootcamp.addUser(user);
        return res.json({ message: "Usuario agregado al Bootcamp" });
    } catch (error) {
        return res.status(500).json({ message: "Error al agregar usuario al Bootcamp" });
    }

};

// Obtener todos los Bootcamps
const findAll = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.findAll()
        return res.json(bootcamps) 
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener todos los Bootcamps" });
    }
}

// Obtener un Bootcamp por id
const findById = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findByPk(req.params.id)
        return res.json(bootcamp)     
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener el Bootcamp" });
    }
}

module.exports = {
    createBootcamp,
    addUser,
    findById,
    findAll,
}