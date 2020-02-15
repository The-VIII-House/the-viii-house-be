const mongo = require('mongoose');
const Schema = mongo.Schema;

const photoSchema = new Schema({
  owner: mongo.Types.ObjectId,
  image: { 
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    required: true
  },
  tags: [String],
  // **** flags enum needs to be revisited ****
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

module.exports = mongo.model('Photo', photoSchema);
