const User = require('../in_memo/user');

module.exports.getAllUsers = () => User.list();
module.exports.addNewUser = (firstName, lastName, age) => User.insert(firstName, lastName, age);
