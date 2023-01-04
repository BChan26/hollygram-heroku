const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req,res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (
            user &&
            (await middleware.comparePassword(user.passwordDigest, req.body.password))
        ) {
            let payload = {
                userName: user.userName,
                id: user.id,
                email: user.email
            }
            console.log(payload)
            let token = middleware.createToken(payload)
            console.log(token)
            return res.send({user: payload, token})
        }
        res.status(401).send({status: 'Error', msg: 'Unauthorized, Login'})
    } catch (error) {
        throw error
    }
}

const Register = async (req,res) => {
    try {
        const {email, password,userName, fullName, profilePic} = req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({
            email, passwordDigest, userName, fullName, profilePic
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const UpdatePassword = async (req,res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const user = await User.findbyPk(req.params.userId)//<keep an eye on this, it might need a _
    if (
        user &&
        (await middleware.comparePassword(
            user.dataValues.password,
            oldPassword
        ))
    ) { //keep an eye out for this passwordDigest
        let passwordDigest = await middleware.hashPassword(newPassword)
        await user.update({passwordDigest})
        return res.send({ status: 'Ok', payload: user})
    }
    res.status(401).send({status: 'Error', msg: 'Unauthorized, UpdatePassword'})
    } catch (error) {
        throw error
    }
}

const CheckSession = async ( req,res) => {
    const {payload} = res.locals
    console.log("working", payload)
    res.send(payload)
}

module.exports = {
    Login,
    Register,
    UpdatePassword,
    CheckSession
}