// var db = require('../db');
 var db = require('../db/index.js');


module.exports = {
  getAll: function (callback = ()=>{}) {
    // var post = {id: userCount, name:userName};
    var query = db.connection.query(`SELECT * FROM messages`,function(err,results,field){
      if(err) {
        callback(err);
      }else{
        console.log("success loop!");
        callback(null, result);
      }
    })
  }, // a function which produces all the messages
  create: function (userName="default",content="hello world", feedback=()=>{}) {
    //We are missing find user ID to put into the meesage.

    console.log("(models/messages.js) loop starts ");
    // var post = {id: msgCount, user:1, content:context, time_created:"abc"};
    var query = db.connection.query(`INSERT INTO messages (user, content, time_created) VALUES ("1","${content}","some moment ago")`,function(err,results,field){
      if(err) {
       console.log("error in messages Model!" + err);
      }else{
      console.log("store messages de success!");
      }
    });
  }  // a function which can be used to insert a message into the database
};



// CREATE TABLE messages (
//   /* Describe your table here.*/
//   id int NOT NULL primary key auto_increment,
//   user INT,
//   content varchar(255),
//   time_created varchar(255)
// );