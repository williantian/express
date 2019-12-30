class Subscription {
  constructor(userId, url) {
    this.userId = userId;
    this.url = url;
  }

  static list() {
    return Subscription.subscription;
  }

  static insert(userId, url) {
    const sub = new Subscription(userId, url);
    Subscription.subscription.push(sub);
    return sub;
  }

  static findByUserId(userId) {
    return Subscription.subscription.map((s) => s.userId === userId);
  }
}
Subscription.subscription = [];
module.exports = Subscription;
