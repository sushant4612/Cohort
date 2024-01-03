const express = require('express');

const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json())

app.get('/', (req,res) => {
    const john = users[0].kidneys;
    const johnKidney = users[0].kidneys.length;
    let healthyKidney = 0;
    for(let i = 0; i < johnKidney; i++){
        if(john[i].healthy){
            healthyKidney++;
        }
    }
    const unhealthyKidney = johnKidney - healthyKidney;
    res.json({
        johnKidney,
        healthyKidney,
        unhealthyKidney
    })
})

app.post('/', (req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })
})

app.put('/', (req,res) => {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete('/', (req,res) => {
    let kidney = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            kidney.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = kidney;
    res.json({msg:"done"});
})


app.listen(3000)
