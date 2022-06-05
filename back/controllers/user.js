const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const email = require('../mails/mail-sender');
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({
          message: 'User created !',
          status: 201
        }))
        .catch(error => res.status(400).json({
          error
        }));
    })
    .catch(error => res.status(500).json({
      error
    }));
};

exports.login = (req, res, next) => {
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        return res.json({
          error: 'User not found !'
        });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.json({
              error: 'Wrong password !'
            });
          }
          if (user.status === 'pending') {
            return res.json({
              error: 'User not activated !'
            });
          } else {
            res.status(200).json({
              loggedIn: true,
              userId: user._id,
              token: jwt.sign({
                  userId: user._id
                },
                'RANDOM_TOKEN_SECRET', {
                  expiresIn: '24h'
                }
              )

            });
          }
        })
        .catch(error => res.status(500).json({
          error
        }));
    })
    .catch(error => res.status(500).json({
      error
    }));
};

exports.profile = (req, res, next) => {
  User.findOne({
      _id: req.params.id
    })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).json({
      error
    }));
};

exports.getPendingUsers = (req, res, next) => {
  User.find({
      status: 'pending'
    })
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({
      error
    }));
}

exports.acceptRequest = (req, res, next) => {
  User.findOne({
      _id: req.params.id
    })
    .then(user => {
      user.status = 'active';
      email.accepterCompte(user.name, user.email);
      user.save()
        .then(() => res.status(200).json({
          message: 'User activated !'
        }))
        .catch(error => res.status(500).json({
          error
        }));
    })
    .catch(error => res.status(500).json({
      error
    }));
}

exports.updateProfile = (req, res, next) => {
  var file ;
  if (req.file){
    file = req.file.filename;
  }
  if (req.body.password != "null") {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const hashedPassword = hash;
        User.findOne({
            _id: req.params.id
          })
          .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = hashedPassword;
            user.city = req.body.city;
            user.job = req.body.job;
            user.description = req.body.description;
            if (req.file){
              user.image = file
            }
            user.save()
              .then(() => res.status(200).json({
                message: 'User updated !'
              }))
              .catch(error => res.status(500).json({
                error
              }));
          });
      })
      .catch(error => res.status(500).json({
        error
      }));
  } else {
    User.findOne({
        _id: req.params.id
      })
      .then(user => {
        user.name = req.body.name;
        user.email = req.body.email;
        user.city = req.body.city;
        user.job = req.body.job;
        user.description = req.body.description;
        if (req.file){
          user.image = file
        }
        user.save()
          .then(() => res.status(200).json({
            message: 'User updated !'
          }))
          .catch(error => res.status(500).json({
            error
          }));
      });
  }
}

exports.refuserRequest = (req, res, next) => {
  // find user and delete it 
  User.findOneAndDelete({
      _id: req.params.id
    })
    .then((user) => {
      res.status(200).json({
        message: 'User deleted !'
      });
      email.refuserCompte(user.name, user.email);

    })
    .catch(error => res.status(500).json({
      error
    }));
}

exports.getAllUsers = (req, res, next) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({
      error
    }));
}

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
  .then(() => res.status(200).json({ message: 'User deleted !'}))
  .catch(error => res.status(400).json({ error }));
}