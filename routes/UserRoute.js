const router = require('express').Router()
const controller = require('../controllers/Users')
const middleware = require('../middleware')

router.get('/profile', controller.SeeOneUser)
router.get('/allusers', controller.SeeAllUsers)

module.exports = router