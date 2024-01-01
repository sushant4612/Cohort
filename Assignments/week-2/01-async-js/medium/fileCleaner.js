const fs = require('fs')

let content = "";

fs.readFile('a.txt','utf8', (err, data) => {
    if(err){
        console.log("Error occured ",err);
        return;
    }
    content = data;
    console.log(data);
    content = content.replace(/\s+/g,' ');

    fs.writeFile('a.txt',content, (err) => {
        if(err){
            console.log("Error occured");
            return;
        }
        console.log("Success")
    })
})

