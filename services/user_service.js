const User = require('../in_memo/user');
const Subscription = require('../in_memo/subscription');

module.exports.getAllUsers = () => User.list();
module.exports.addNewUser = (firstName, lastName, age) => User.insert(firstName, lastName, age);
module.exports.getUserById = (userId) => User.getOneById(userId);
module.exports.createSubscription = (userId, url) => {
  const user = User.getOneById(userId);
  if (!user) throw Error('No such user!');
  const sub = Subscription.insert(userId, url);
  return sub;
};
