const mysql = require('mysql');
const User = mysql.model('User');
const passport = require('passport');
const _ = require('lodash');

module.exports.register = (req, res, next) => {

    const user = new User();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err,doc) => {
        if(!err) { res.send(doc)}

        else {
            if(err.code == 11000)
            res.status(422).ssend(['Duplicate email Address Found.'])
            else return next(err);
        }
    })
}

module.exports.authenticate = (req, res, next ) => {
    //call for passport authentication
    passport.authenticate('local', (err, user, info) => {

        //error from passport middleware
        if(err) return res.status(400),json(err);

        //register
        else if (user) return res.status(200).json({ "token":user.generateJwt() });

        //unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {

    User.findOne({ _id:req._id},(err, user) => {
        if(!user)
        return res.status(404).json({status: false,  message: 'User Not Found.'});

        else
        return res.status(200).json({status:true, user : _.pick(user, ['firstname', 'lastname', 'username', 'email', 'password'])});
    })
}