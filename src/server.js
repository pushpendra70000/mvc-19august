const express = require('express');
const app = express();
const env = require('dotenv');
const { registerRoute } = require('./routes/admin/register');
env.config();


app.use(express.json());
app.use('/api',registerRoute)

let port= process.env.PORT
app.listen(port,()=>{
    console.log('this server is running on '+ port)
})