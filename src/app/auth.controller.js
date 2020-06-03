const express = express ('express');
const route = express.Router();
const ctrlUser = require('./user.controller');
const jwthelper = require('./helpers');
const bodyParser = require('body-parser');

route.use(bodyParser.urlencoded({ extended : true}));

route.post('/register', ctrlUser.register);
// function (req, res) {
//     console.log(req.body);
// });

route.post('/authenticate', ctrlUser.authenticate);

route.get('/userProfile', jwthelper.verifyJwtToken, ctrlUser.userProfile)

module.exports = route;
// function (req, res) {

// });