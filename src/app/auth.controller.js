const express = express ('express');

const route = express.Router();

const bodyParser = require('body-parser');;

route.use(bodyParser.urlencoded({ extended : true}));

route.post('/register', function (req, res) {
    console.log(req.body);
});

route.post('/login', function (req, res) {

});