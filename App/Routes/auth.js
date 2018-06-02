var authController = require('../Controllers/authcontroller');
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
 
}

