var models = require('../models');
const db = require('../db/index');


module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    console.log("IN controller User POST loop");
    db.orm.sync()
    .then( () => db.User.findOrCreate({where:{name: req.body.name}, raw: true,attributes:['id']}))
    .then( (user) =>{
        res.sendStatus(201);
    });
  }
};
