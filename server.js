const express = require('express')
const cors = require('cors')

const plantRouter = require('./routers/plant')

require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
   console.log(`Server is running, check ${PORT}`)
})