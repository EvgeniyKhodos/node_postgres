const express = require('express')
const userRouter = require('./routes/user.router')
const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Postgres!!! Hello NodeJS!!!')
    })

app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server started on post ${PORT}`))