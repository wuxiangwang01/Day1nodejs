const fs = require('fs')
const path = require('path');


fs.readFile(path.join(__dirname,'./date.txt'),'utf-8',(err,data)=>{
    if(err)  return console.log(err.message);
    console.log(data);
})