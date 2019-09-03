const express = require('express');
const userRoutes = require('../users/userRoutes');

const server = express();

server.use(express.json());
server.use('/api', userRoutes);


  
 
module.exports = server;