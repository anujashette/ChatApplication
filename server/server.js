const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const cors=require('cors')
var http = require('http').createServer(app);
const io = require('socket.io')(http);
var users = [] 
var connections = []

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.use(cors())

// Response to the browser
// app.get('/', (req, res) => {
//     res.json({ "message": "Welcome to chat application." });
// })
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', function(socket){
    connections.push(socket)
    console.log('a user connected',connections.length);
    socket.on('disconnect', function(){
        connections.splice(connections.indexOf(socket),1)
        console.log('a user connected',connections.length);
      });
      socket.on('send message', function(msg){
              io.emit('receive message', msg);
            });
  });


require('./app/routes/user.routes.js')(app);
// Port is listening

http.listen(5000, () => {
    console.log("Server is listening on port 5000");
})