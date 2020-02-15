const mongo = require('mongoose');
const Schema = mongo.Schema;

const commentSchema = new Schema({
  owner: {
    type: mongo.Types.ObjectId,
    required: true
  },
  post: {
    type: mongo.Types.ObjectId,
    required: true
  },
  blurb: {
    type: String,
    required: true
  }
});

module.exports = mongo.model('Comment', commentSchema);
