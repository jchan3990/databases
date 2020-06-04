var models = require('../models');

module.exports = {
  get: function (req, res) {
    var data = models.messages.getAll((err,result)=>{
      if(err){
        console.log("error in getall message function!");
        res.send('failed!');
      }else{
        res.send(result);
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log("in controller post loop ");
    var userName = req.body.username;
    var text = req.body.message;
    var roomName = req.body.roomname;
    models.messages.create(userName,text,roomName,()=>{
      console.log("write to mysql success");
      res.send('Success!');
    });
  }
};//

// // CREATE TABLE messages (
//   /* Describe your table here.*/
//   id int NOT ULL primary key auto_increment,
//   user INT,
//   content varchar(255),
//   roomname varchar(255)
// );