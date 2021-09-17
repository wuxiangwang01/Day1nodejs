const fs = require('fs')

// 同步方式
// console.log(123);
// let res1 = fs.readFileSync('./a1.txt','utf-8');
// console.log(res1);
// let res2 = fs.readFileSync('./b.txt','utf-8');
// console.log(res2);
// let res3 = fs.readFileSync('./date.txt','utf-8');
// console.log(res3);
// console.log(456);
// 异步方式
// console.log(123);
// fs.readFile('a1.txt','utf-8',(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data);
// })
// fs.readFile('b.txt','utf-8',(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data);
// })
// fs.readFile('date.txt','utf-8',(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data);
// })
// console.log(456);