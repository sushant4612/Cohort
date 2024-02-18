require('dotenv').config();

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.json({name : "Sushant"})
})

app.listen(port,()=>{
    console.log(`listning on port ${port}`);
})

app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
});