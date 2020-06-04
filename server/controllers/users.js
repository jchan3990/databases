var models = require('../models');


module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    console.log("in controller post loop ");
    var userName = req.body.username;
    //receive a Post Request
      models.users.create(userName,()=>{
        //response to client either 400 or 201
        res.send('Success!');
        // end
        // res.end()
      });
  }
};
