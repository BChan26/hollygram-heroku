const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRoute = require('./routes/AuthRoute')
const PostRoute = require('./routes/PostRoutes')
const UserRoute =require('./routes/UserRoute')
const CommentRoute = require('./routes/CommentRoute')

const PORT = process.env.PORT || 3001
const app = express()




app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.use('/auth', AuthRoute)
app.use('/feed', PostRoute)
app.use('/user', UserRoute)
app.use('/comment', CommentRoute)


const users={
    "userdata": [
{
    "id": 1,
    "name":"Santa",
    "username": "@st.nick",
"img": "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/01/12185631/tim-allen-santa-clause.jpeg"},


{
    "id": 2,
    "name":"Grinch",
    "username": "@grinch>christmas"},


{
    "id": 3,
    "name":"Mrs. Claus",
    "username": "@mrs.st.nick"},

{    "id": 4,
    "name":"Holdiay Treats",
    "username": "holidayrecipies"}

    ]
}


app.get('/suggestions', (req, res) => {
    console.log(req.body)
     res.setHeader("Content-Type", "application/json");
  res.json(users)
})




app.listen(PORT, () => { 
    console.log(`Express listening on port ${PORT}`)
})