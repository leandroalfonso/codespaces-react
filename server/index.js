const express = require('express');
const server = express();

server.get('/geeks' , (req, res) => {
return res.json( { message: 'ola mundo'});
})

server.listen(3001);