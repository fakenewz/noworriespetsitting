var exports = module.exports = {}
var path = require('path')
 
exports.signup = function(req, res) {
 
    res.render(path.join(__dirname, "../Public/2. Pages/9. Account/login.hbs"),{});
 
}

