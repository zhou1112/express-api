var express = require('express')
var app = express()

app.get('/',function(req,res){
  res.send('hello express')
  console.log('zhouzhou');
})



//'/里面加路径'
app.get('/zhou',function(req,res){
  res.send('hello zhouzhou')
  console.log('chengzi');
})

// app.listen(3000)
app.listen(3000,function(){
  console.log('running on port 3000...');
})
