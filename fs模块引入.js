const fs = require('fs');
// 读取data1.txt
fs.readFile('./date.txt','utf-8',(err,data)=>{
    if(err)  return console.log(err.message);
    console.log(data);
})

// 向data。txt写入 您好世界
// fs.writeFile('./date.txt','您好，世界',err=> {
//     if(err) return console.log('写入文件失败');
//     console.log("写入文件成功");
// })
// 追加数据到文件中
fs.appendFile('./date.txt','aaaaaaaa',err=>{
    if(err) return console.log(err.message);
    console.log('追加文件成功');
})

