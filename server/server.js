const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const cors=require('cors')

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
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to chat application." });
})

require('./app/routes/user.routes.js')(app);
// Port is listening 

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})