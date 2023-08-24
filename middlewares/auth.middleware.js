const jwt = require('jsonwebtoken')

function auth_require (req, res, next) {

    const { authorization } = req.headers

    try {
        const decoded = jwt.verify(authorization, process.env.SECRET_KEY)

        const actualTime = ( new Date() / 1000 )
        if(actualTime > decoded.exp) {
            return res.status(401).json({error: 'Token expirado'})
        }

        req.data = decoded.data
    } catch (error) {
        return res.status(401).json(error)
    }

    next()
}

module.exports = {auth_require}