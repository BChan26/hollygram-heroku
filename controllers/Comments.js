const { Comments } = require('../models')

const SeeComments = async (req,res) => {
    try { 
        const comments = await Comments.findAll({
            where: { postId: req.params.postId}
        })
        res.send(comments)
    } catch (error) {
        throw error
    }
}

const CreateComment = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId)

        const comment = await Comments.create({ ...req.body, userId})
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const UpdateComment = async (req,res) => {
    try {
        const comment = await Comments.update(
            {...req.body},
            { where: {id: req.params.commentId}, returning: true}
        )  
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const DeleteComment = async (req,res) => {
    try {
        await Comments.destroy({ where: {id: req.params.commentId}})
        res.send({ msg: 'Comment Deleted', payload: req.params.commentId})
    } catch (error) {
        throw error
    }
}

module.exports = {
    SeeComments,
    CreateComment,
    UpdateComment,
    DeleteComment
}