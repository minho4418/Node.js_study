const express = require('express')

const app = express()

app.listen(8082, function(){
    console.log('server start on 8082')
});

app.get('/', function(req,res){
    res.send("안녕하세요!!!")
});


// http로 서버띄우기
//const http = require("http");
//const app = http.creatServer((req,res) => {
    //res.writeHead(200, {"Content-Type": "text/html; charset=utf-t"});
    //if (req.url === "/") {
        //res.end("여기는 루트 입니다.");
    //} else if(req.url === "/login"){
        //res.end("여기는 로그인 화면입니다.");
    //}
//});
