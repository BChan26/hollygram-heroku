const router = require('express').Router()
const controller = require('../controllers/Comments')
const middleware = require('../middleware')


router.get('/:postId', controller.SeeComments)

router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateComment
)

router.put(
    '/:commentId', //<might need to be comments_id
    //middleware.stripToken,
    //middleware.verifyToken,
    controller.UpdateComment
)

router.delete(
    '/:commentId',
    //middleware.stripToken,
    //middleware.verifyToken,
    controller.DeleteComment
)

module.exports = router