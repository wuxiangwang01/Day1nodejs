const fs = require('fs')
const path = require('path');


fs.readFile(path.join(__dirname,'./date.txt'),'utf-8',(err,data)=>{
    if(err)  return console.log(err.message);
    console.log(data);
})
fs.appendFile(path.join(__dirname,'./date.txt'),'hello,nihao',err=>{
    if(err) return console.log(err.message);
    console.log('追加内容成功');
})