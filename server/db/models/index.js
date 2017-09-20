const User = require('./user');
const Adventure = require('./adventure');
const Passage = require('./passage');
const Link = require('./link');

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

Passage.belongsToMany(Passage, { as: 'fromPassage', through: Link})
Passage.belongsToMany(Passage, { as: 'toPassage', through: Link})


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
  Link
}
