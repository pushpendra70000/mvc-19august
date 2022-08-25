const env = require('dotenv');
env.config();

const mongoose= require ('mongoose');
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.2tvgl.mongodb.net/?retryWrites=true&w=majority`)
.then((d)=>{
    console.log('connected');
})
.catch((e)=>{
    console.log('not connected')
});

exports.mongoose= mongoose;