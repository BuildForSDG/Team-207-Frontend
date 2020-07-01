const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
//const mysql = require('mysql')
//require('./passportConfig')
//const passport = require('passport')
const path = require('path');
//const session = require('express-session')
//const forceSSL = require('forceSSL')
const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'https://shielded-badlands-35399.herokuapp.com/',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/api/users': '/api/user/register',
        '^/api/remove/users': '/users',
    },
    router: {
        'dev.localhost:4200': 'http://localhost:8000',
    },
};

const backendProxy = createProxyMiddleware(options);

app.use('/api', backendProxy)

//app.use('/api', createProxyMiddleware({ target: ''}))

const PORT = process.env.PORT || 4200;

const user = [];

app.use(bodyParser.json());

//dotenv.config();

//connect to mysql
//mysql.set('useFindAndModify', false);
//mysql.set('useUnifiedTopology', true);
//mysql.connect(process.env.DB_CONNECT,{useNewUrlParser: true} , () => console.log('connected to db!'));

//app.use(express.static(path.join(__dirname, './dist')));

app.use(express.static(__dirname + '/dist/src'))

//app.use(express.static(${__dirname}/front-end/dist/))
//middleware
app.use(bodyParser.urlencoded({extended: false }))
//app.use(cors())
//app.use(passport.initialize())
app.use(bodyParser.json())

//import routes
//const RegisterController = require('./app/auth/RegisterController');
//app.use('/register', register);

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
app.get('/api/user', (req, res) => { res.json(user); });

app.post('/api/user', (req, res) => { const user = req.body.user; users.push(user); res.json("user added"); });

//app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(['https://', req.get('Host'), req.url].joiin(''));
        }
        next();
    }
}
app.use(forceSSL())

app.get('*', (req, res) => res.sendFile(path.join(__dirname/dist/src/index.html)));

const server = http.createServer(app);

app.listen(PORT, () => { console.log(`App runs on port ${ PORT }`);
});

//const server = app.listen(53422,'localhost', function () {
//    {
//        console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
//    }
//});
