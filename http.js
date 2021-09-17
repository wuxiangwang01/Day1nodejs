const fs = require('fs')
const path = require('path')
const http = require('http')

    

// 创建服务器对象
const server = http.createServer()
// 监听端口并开启服务器
server.listen(3001,'192.168.77.1',()=>{
    console.log('服务器成功开启');

})
// 注册事件，监听请求
server.on('request',(req,res)=>{

    fs.readFile(path.join(__dirname,'./index.html'),(err,data)=>{
        if(err) return console.log(err.message);
        
        res.end(data);
    })

})