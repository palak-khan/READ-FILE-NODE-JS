const fs = require("fs");
// READING
fs.readFile("hello.txt","utf-8", (err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});
