var models = require('../models');

module.exports = {
  get: function (req, res) {
    var data = models.messages.getAll((err,result)=>{
      if(err){
        console.log("error in getall message function!");
        res.writeHead(500, headers);
        res.end();
      }else{
        res.writeHead(200, headers);
        res.end(result);
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log("in controller post loop ");
    var content = req.body;

    //receive a Post Request
    //get the data from the post request (user name)
      // var userName = req.json.username;
    //call out models to insert to database
      models.messages.create(content.username,content.message,()=>{
        console.log("write to mysql success");
        res.send('Success!');

      });
  }
   // a function which handles posting a message to the database
};

//(userName="default",content="hello world", feedback=()=>{}) {