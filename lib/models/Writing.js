const mongo = require('mongoose');
const Schema = mongo.Schema;

const writingSchema = new Schema({
  owner: {
    type: mongo.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  privacyLevel: {
    type: String,
    default: 'private',
    enum: ['public', 'fof', 'private']
  },
  tags: {
    type: String,
    required: true
  },
  // **** flags enum needs to be revisited ****
  flags: {
    type: [String],
    enum: ['blood', 'scat', 'rape'],
    default: ['blood', 'scat', 'rape']
  }
});

module.exports = mongo.model('Writing', writingSchema);
