const config = require('../../app/config')
const express = require('express')
const router = express.Router()
const accountServices = require('../services/account.services.ts')

// routes
router.post('/authenticate', authenticate)
router.post('/register', register)
router.get('/', getAll)
router.get('/current', getCurrent)
router.put('/:_userId', update)
router.delete('/:_userId', _delete);

module.exports = router;

function authenticate(req, res) {
    accountSercives(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user)
            } else {
                // authentication failed
                res.status(400).send('Username or password is incorrect')
            }
        })
        .catch(function (err) {
            res.status(400).send(err)
        });
}

function register(req, res) {
    accountServices.create(req.body)
        .then(function () {
            res.json(success)
        })
        .catch(function (err) {
            res.status(400).send(err)
        });
}

function getAll(req, res) {
    accountServices.getAll()
        .then(function (users) {
            res.send(users)
        })
        .catch(function (err) {
            res.status(400).send(err)
        });
}

function getCurrent(req, res) {
    accountServices.getById(req.user.sub)
        .then(function (user) {
            if (user) {
                res.send(user)
            } else {
                res.sendStatus(404)
            }
        })
        .catch(function (err) {
            res.status(400).send(err)
        });
}

function update(req, res) {
    accountServices.update(req.params._userId, req.body)
    .then(function () {
        res.json('success')
    })
    .catch(function (err) {
        res.status(400).send(err)
    });
}
function _delete (req, res) {
    accountServices.delete(req.params._userId)
    .then(function () {
        res.json('success')
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}