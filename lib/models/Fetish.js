const mongo = require('mongoose');
const Schema = mongo.Schema;

const fetishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  kinksters: [mongo.Types.ObjectId]
});

module.exports = mongo.model('Fetish', fetishSchema);
