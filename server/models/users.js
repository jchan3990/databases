 var db = require('../db/index.js');

module.exports = {
  getAll: function (callback = ()=>{}) {
    // var post = {id: userCount, name:userName};
    var query = db.connection.query(`SELECT id, name FROM users`,function(err,results,field){
      if(err) {
        console.log("error inusers module"+ err);
      }else{
        console.log("success loop!");
        callback(err, results);
      }
    })
  },
  create: function (userName,callback = ()=>{}) {
    console.log("in user create post loop ");
    // var post = {id: userCount, name:userName};
    var query = db.connection.query(`INSERT INTO users (name) VALUES ("${userName}")`,function(err,results,field){
      if(err) {
        console.log("error inusers module"+ err);
      }
      console.log("success loop!");
      callback();
    })
  }
};



// var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
//   if (error) throw error;
//   // Neat!
// });
// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
