const Sequelize = require('Sequelize');
const orm = new Sequelize ('chat', 'root','12345678',{
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});



const User = orm.define('User', {
  name: Sequelize.STRING
});

const Message = orm.define('Message',{
  userid: {
    type: Sequelize.INTEGER,
    referece: {
      model: User,
      key: 'id'
    }
  },
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
});

User.destroy({
  where: {},
  truncate: true
})

Message.destroy({
  where: {},
  truncate: true
})

module.exports.User = User;
module.exports.Message = Message;
module.exports.orm = orm;

