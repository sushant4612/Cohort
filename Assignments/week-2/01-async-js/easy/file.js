const fs = require('fs')

fs.readFile('a.txt','utf8', (err,data) => {
    if(err){
        console.log("An Error Occcured: ", err);
        return;
    }
    console.log(data);
})

for(let i = 0; i < 1000000; i++){
    console.log(i);
}