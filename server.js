const express = require('express')
const cors = require('cors')

const plantRouter = require('./routers/plant')
const userRouter = require('./routers/user')

require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(plantRouter)
app.use(userRouter)


const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
   console.log(`Server is running, check ${PORT}`)
})