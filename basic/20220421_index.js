const express = require('express')

const app = express()

app.listen(8082, function(){
    console.log('server start on 8082')
});

app.get('/', function(req,res){
    res.send("안녕하세요!!!")
});
