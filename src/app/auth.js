```const router = require('express').Router();
const User = require('./models/User');
const ctrlUser require('../controller/user.controller');
const jwthelper = require('../jwtHelper')

//validation

router.post('/register'. ctrlUser.register);
route.post('authenticate', ctrlUser.authenticate);
router.get('/userProfile' jwthelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;````