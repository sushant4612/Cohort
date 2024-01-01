const fs = require('fs')

fs.writeFile('b.txt',"hello my name is sushant","utf8", (err) => {
    if(err){
        console.log("Error occured is: ",err);
        return;
    }
    console.log("Successfully");
})