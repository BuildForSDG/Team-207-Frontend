const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const cors = require('cors')
const session = require('express-session')

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
    next();
});

app.use('/api', require('./auth.controller'));
//app.use('/api/login', require('./controller/auth.controller'));

const server = app.listen(4200,'localhost', function () {
    {
        console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
    }
});
// const port = 4200

// app.post('/api/auth/register', (req, res) => {
// 	res.json({ data: req.body })
// })

// app.listen(port, () => console.log(`Server listening on port ${port}!`))


// .module('app', [
//    'ngStorage',
//    'ngRoute',
//    'angular-loading-bar'
// ])
//    .constant('urls', {
//        BASE: 'http://jwt.dev:8001',
//        BASE_API: 'http://api.jwt.dev:8001/v1'
//    })
//    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//        $routeProvider.
//            when('/', {
//                templateUrl: './home.component.html',
//                component: 'HomeComponent'
//            }).
//            when('/login', {
//                templateUrl: './login.component.html',
//                controller: 'LoginController'
//            }).
//            when('/register', {
//                templateUrl: './register.component.html',
//                controller: 'RegisterController'
//            }).
//            when('/restricted', {
//                templateUrl: 'partials/restricted.html',
//                controller: 'RestrictedController'
//            }).
//            otherwise({
//                redirectTo: '/'
//            });
//     }
// ]);