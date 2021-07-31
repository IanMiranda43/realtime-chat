import express from 'express'
import path from 'path'

const app = express()
const port = 3333

app.use(express.static(path.resolve('src', 'public')))

app.listen(port, console.log(`Server is running at port:${port}`))