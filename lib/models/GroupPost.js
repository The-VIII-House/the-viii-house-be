const mongo = require('mongoose');
const Schema = mongo.Schema;

const groupPostSchema = new Schema({
  group: {
    type: mongo.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  owner: {
    type: mongo.Types.ObjectId,
    required: true
  },
  blurb: {
    type: String,
    required: true
  }
});

module.exports = mongo.model('GroupPost', groupPostSchema);
