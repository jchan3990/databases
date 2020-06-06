const db = require('../db/index');


module.exports = {
  get: function (req, res) {
    console.log("IN controller msg GET loop");
    db.orm.sync()
    .then(() => db.Message.findAll())
    .then( (results) =>{
        res.send(results);
      })
  },
  post: function (req, res) {
    console.log("IN controller Msg POST loop");
    db.orm.sync()
    .then( () => db.User.findOrCreate({where:{name: req.body.user}, raw: true,attributes:['id']})
    .then( (user) =>{
      var params = {
        userid: user[0].id,
        text: req.body.text,
        roomname: req.body.roomname
      };
      db.Message.create(params).then( (err,result) => {
        res.sendStatus(201);
      });
    }))
  }
}


