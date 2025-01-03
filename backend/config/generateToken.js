const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const generateToken = (id) =>{
    return jwt.sign({id},JWT_SECRET,{
        expiresIn:"2d"
    })
}

module.exports = generateToken