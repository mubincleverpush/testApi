const express = require('express');
const cors = require('cors');
const app = express();

app.get('/', (req, res)=>{
  console.log('we got it ');
  res.send('Got your request')
})

app.listen(8000, ()=>{
  console.log('api is running on 8000')
})