const express = require('express')
const app = express();
const serverless = require('serverless-http');
const port = 5555;

app.use(express.json());


app.get('/details', (req,res)=>{
    return res.json({message:'Hello World'})
})





app.listen(port, ()=>{
    console.log(`it is running on the port${port}`)
})

module.exports.handler = serverless(app);