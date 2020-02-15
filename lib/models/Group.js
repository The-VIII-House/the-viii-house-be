const mongo = require('mongoose');
const Schema = mongo.Schema;

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  members: [mongo.Types.ObjectId],
  owners: {
    type: mongo.Types.ObjectId,
    required: true
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hasEvents: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    required: true,
    enum: ['fetish', 'house', 'business', 'event']
  },
  flags: {
    type: [String],
    enum: ['blood', 'scat', 'rape'],
    default: ['blood', 'scat', 'rape']
  },
  privacyLevel: {
    type: String,
    default: 'private',
    enum: ['public', 'fof', 'private']
  }
});

module.exports = mongo.model('Group', groupSchema);
