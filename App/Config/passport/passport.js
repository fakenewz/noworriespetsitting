var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, allUsers) {
    var AllUsers = allUsers;
    var LocalStrategy = require('passport-local').Strategy;
    console.log("hello1")
    passport.serializeUser(function(allUsers, done) {
        
        done(null, allUsers.id);
      });
    
      passport.deserializeUser(function(id, done) {
        
        AllUsers.findById(id).then(function(allUsers) {
            if (allUsers) {
                done(null, allUsers.get());
            } else {
                done(allUsers.errors, null);
            }
        });
      });
      console.log("hello2")

  passport.use('local-signup', new LocalStrategy(
    {
        // routeName: 'routeName',
        usernameField: 'email',
        passwordField: 'thepassword',
        fullname: 'userfullname',
        theusercity: 'usercity',
        theownerorsitter: 'ownerorsitter',
        passReqToCallback: true
    },

    function(req, email, thepassword, done) {
        console.log(email, thepassword)
        var generateHash = function(thepassword) {
            return bCrypt.hashSync(thepassword, bCrypt.genSaltSync(8), null);
        };
        
        AllUsers.findOne({
            where: {
                email: email
            }
        }).then(function(foundUser) {
            console.log("test", thepassword)
            if (foundUser)
            {
                return done(null, false, {
                    message: 'Sorry, email already in use'
                });
            } else {
                var userPassword = generateHash(thepassword);
                var data =
                    {
                        email: email,
                        thepassword: userPassword,
                        userfullname: req.body.userfullname,
                        usercity: req.body.usercity,
                        ownerorsitter: req.body.ownerorsitter
                    };
                    console.log("email", data.email)
                    console.log("fullname", data.userfullname)
                    console.log("city", data.usercity)
                    console.log("ownerorsitter", data.ownerorsitter)
                    console.log("fdf", data.thepassword)

                AllUsers.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    }
  ));


  passport.use('local-signin', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'thepassword',
        passReqToCallback: true
    },

    function(req, email, thepassword, done) {
        
        var AllUsers = allUsers;
        var isValidPassword = function(userpass, thepassword) {
            return bCrypt.compareSync(thepassword, userpass);
        }
        
        AllUsers.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(allUsers) {
            if (!allUsers) {
                return done(null, false, {
                    message: 'Sorry, user does not exist'
                });
            } 

            if (!isValidPassword(allUsers.thepassword, thepassword)) {
                return done(null, false, {
                    message: 'Password Incorrect!'
                });
 
            }

            var userinfo = allUsers.get();
            return done(null, userinfo);
 
        }).catch(function(err) {
            console.log("Error:", err);
 
            return done(null, false, {
                message: 'Something went wrong with signing in'
            });
        });
     }
  ));

}