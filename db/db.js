const mongoose = require('mongoose')
require('dotenv').config()

//connect to mongoose client with parsing option 
mongoose.connect(process.env.MONGOOSE_CONNECTION_URL, {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify:false,
useUnifiedTopology: true 
})