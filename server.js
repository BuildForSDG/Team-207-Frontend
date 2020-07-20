const path = require('path');
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const http = require('http')
const mysql = require('mysql')
const passport = require('passport')
const session = require('express-session')
const dotenv = require('dotenv')
//const environment = require('./src/environments/environment.prod')

//const app = express()
app.use(cors())
app.use(bodyParser.json())

dotenv.config();


//connect to mysql
const connection = mysql.createConnection ({
    host : 'us-cdbr-east-05.cleardb.net',
    port : '3306',
    database : 'heroku_ffad0d173f051f2',
    username : 'ba6c57ad573d67',
    password : '0f065a41'
})

connection.connect();

const PORT = process.env.PORT || 4200;

//const database = require('./db')
//authRouter = require('./src/app/router/auth')

//const user = [];

//mysql.set('useFindAndModify', false);
//mysql.set('useUnifiedTopology', true);
//mysql.connect(process.env.DB_CONNECT,{useNewUrlParser: true} , () => console.log('connected to db!'));

//app.use(express.static(path.join(__dirname, './dist')));

app.use(express.static(__dirname + '/dist/banking-insurance'))

//middleware
//app.use(bodyParser.urlencoded({extended: false }))
//app.use(cors())
app.use(passport.initialize())
//app.use(bodyParser.json())

//app.use('/api', authRouter)
//import routes
//const RegisterController = require('./app/auth/RegisterController');
//app.use('/register', register);

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
    secret: environment.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split('')[0] === 'Bearer') {
            return req.headers.authorization.split('')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({path: ['/users/authenticate', '/users/register']}));

//routes
app.use('/users', require('./controllers/user.controller'));

app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
    next();
});

//app.get('/*', function (req, res, next)  {
//    res.sendFile(path.join(__dirname + '/src/index.html'));
//});

/* "/api/user"
*   GET: find all users
*   POST: creates a new user
*
*/
// app.get("/api/user", function(req, res) {

// })

// app.post('/api/user', function(req, res) {
// })

/* "/api/user/:id"
*   GET: find user by id
*   PUT: update user by id
*   DELETE: deletes user by id
*/

// app.get('/api/user/:id', function(req, res) {
// })

// app.put('/api/user/:id', function(req, res) {
// })

// app.delete('/api/user/:id', function(req, res) {
// })
//app.post('/api/users', (req, res) => { res.json(users); });

//app.post('/api/user', (req, res) => { const user = req.body.user; users.push(user); res.json("user added"); });

// const forceSSL = function () {
//     return function (req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host'), req.url].join('')
//             );
//         }
//         next();
//      }
// }
// app.use(forceSSL());

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(PORT, function () { console.log("App runs on port "+ port );
});

//const server = app.listen(53422,'localhost', function () {
//    {
//        console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
//    }
//});
