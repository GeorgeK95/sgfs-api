var express = require('express')
    // , validate = require('express-validation')
    // , http = require('http')
    , bodyParser = require('body-parser')
    // , cookieParser = require('cookie-parser')
    , app = express();

// const initializeDatabases = require('./db/db')
const routes = require('./router/router')

var Logger = require('./utils/logger')

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

routes(app).listen(process.env.PORT || 3000, () => Logger.log('Server running on port 3000'))

/*
initializeDatabases().then(db => {
    Logger.log('Db connected.')
    // Initialize the application once database connections are ready.
    routes(app, db).listen(3000, () => Logger.log('Server running on port 3000'))
}).catch(err => {
    console.error('Failed to make all database connections!')
    console.error(err)
    process.exit(1)
})*/
