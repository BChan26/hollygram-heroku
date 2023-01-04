const { Post } = require('../models')

const SeeAllPosts = async (req,res) => {
    try {
        const posts = await Post.findAll()
        res.send(posts)
    } catch (error) {
        throw error
    }
}

const FindPostById = async (req,res) => {
    try {
        const post = await Post.findOne({where: {id: req.body.postId}})
        res.send(post)
       } catch (error) {
        throw error
       }
}

const FindPostsByUser = async (req,res) => {
    try {
        const posts = await Post.findAll({
            where: { userName: req.body.userName}})
            res.send(posts)
        } catch (error) {
            throw error
        }
}

const CreatePost = async (req, res) => {
    try {
        const post = await Post.create({ ...req.body})
        res.send(post)
    } catch (error) {
        throw error
    }
}


const UpdatePost = async (req, res) => {
    try {
        const post = await Post.update(
            {...req.body},
            { where: {id: req.params.postId}, returning: true }
        )
    res.send(post)
    } catch (error) { 
        throw error
    }
}

const DeletePosts = async (req,res) => {
    try {
        await Post.destroy({ where: { id: req.params.postId}})
        res.send({ msg: 'Post Deleted', payload: req.params.postId})
    } catch (error) {
        throw error
    }
}

module.exports = {
    SeeAllPosts,
    FindPostById,
    FindPostsByUser,
    CreatePost,
    UpdatePost,
    DeletePosts
}