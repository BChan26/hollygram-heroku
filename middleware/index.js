const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
    let hashedPassword = await bcryptjs.hash(password, SALT_ROUNDS)
    return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
    let passwordMatch = await bcryptjs.compare(password, storedPassword)
    return passwordMatch
}

const createToken = (payload) => {
    let token = jwt.sign(payload, APP_SECRET)
    return token
}

const verifyToken = (req,res,next) => {
    const { token } = res.locals    //<maybe this?? originally res.locals
    try { 
        let payload = jwt.verify(token,APP_SECRET)
        console.log('verified', payload)
        if(payload) {
            res.locals.payload = payload
            return next()
        }
        res.status(401).send(
            { status: 'Error', 
            msg: 'Unauthorized, verifyToken'})
        } catch (error) {
            res.status(401).send(
                {status: 'Error', 
                msg: 'Unauthorized, verifyToken'})
        }
}

const stripToken = (req,res,next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1]
        console.log(token)
        if (token) {
            res.locals.token = token
            console.log('stripping', res.local.token)
            return next()
        }
    } catch (error) {
        res.status(401).send(
            {status:'Error', 
            msg: 'Unauthorized, stripToken'})
    }
}

module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword
}