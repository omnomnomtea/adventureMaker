const User = require('./user');
const Adventure = require('./adventure');
const Passage = require('./passage');
const Link = require('./link');
const NumberFlag = require('./numberFlag');
const StringFlag = require('./stringFlag');


/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Adventure.belongsTo(User, {as: 'owner'});
User.hasOne(Adventure, {as: 'owner'});

Passage.belongsTo(Adventure);
Adventure.hasMany(Passage);

Link.belongsTo(Passage, {as: 'fromPassage', foreignKey: 'fromPassageId'});
Passage.hasMany(Link, {as: 'fromPassage', foreignKey: 'fromPassageId'});

Link.belongsTo(Passage, {as: 'toPassage', foreignKey: 'toPassageId'});
Passage.hasMany(Link, {as: 'toPassage', foreignKey: 'toPassageId'});


NumberFlag.belongsTo(Passage);
StringFlag.belongsTo(Passage);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Adventure,
  Passage,
  Link,
  NumberFlag,
  StringFlag,
}
