var models = require('../models');


module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    console.log("in controller post loop ");
    var userName = req.body.username;
      models.users.create(userName,()=>{
        res.send('Success!');
      });
  }
};
