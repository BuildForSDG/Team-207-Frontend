const router = require('express').Router()
const User = require('../models/user.ts')
const ctrlUser = require('../controllers/user.controller')
const jwthelper = require('../helpers')

//validation
router.post('/register', ctrlUser.register);
route.post('/authenticate', ctrlUser.authenticate);
//router.get('/User', User.getUserId)
router.get('/userProfile', jwthelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;