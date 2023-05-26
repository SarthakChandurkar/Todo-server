const jsonServer = require("json-server"); // import json-server -- old process & dedicated to node.js
const server = jsonServer.create(); // creating server
const router = jsonServer.router("db.json"); // creating route og the url

// Routing is a way of organizing and managing application states
const middleWares = jsonServer.defaults(); // connection between server & client
const port = process.env.port || 5000; // processing environment port of the device in which server will run

server.use(middleWares); // the connection
server.use(router); // the path
server.listen(port,()=>{
    console.log(`Server PORT on ${port}`)
}); // listen user request
