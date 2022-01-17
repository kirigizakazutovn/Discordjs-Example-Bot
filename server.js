const express = require('express')

const server = express();

server.all('/', (req, res)=>{
  res.send("Alive bot")
});

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server Is ready!")})
}

module.exports = keepAlive();
