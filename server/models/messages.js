// var db = require('../db');
 var db = require('../db/index.js');
 var user = require('./users.js');


module.exports = {
  getAll: function (callback = ()=>{}) {
    // var post = {id: userCount, name:userName};
    var query = db.connection.query(`SELECT * FROM messages`,function(err,results,field){
      if(err) {
        callback(err);
      }else{
        console.log("success loop!");
        callback(null, results);
      }
    })
  }, // a function which produces all the messages
  create: function (userName,text,roomName, callback=()=>{}) {
    console.log("(models/messages.js) loop starts ");
    //We are missing find user ID to put into the meesage.
    console.log("getting all user info for id");
    user.getAll( (err, results) =>{
      var userID;
      for(var index in results){
        if(userName === results[index].name){
          userID = results[index].id
        }
      }
      var query = db.connection.query(`INSERT INTO messages (user, text, roomname) VALUES ("${userID}","${text}","${roomName}")`,function(err,results,field){
        if(err) {
         console.log("error in messages Model!" + err);
        }else{
        console.log("store messages de success!");
        }
        callback();
      });

    })
  }
};


// CREATE TABLE messages (
//   /* Describe your table here.*/
//   id int NOT NULL primary key auto_increment,
//   user INT,
//   content varchar(255),
//   roomname varchar(255)
// );