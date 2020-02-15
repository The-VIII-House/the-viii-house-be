const mongo = require('mongoose');
const Schema = mongo.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  openTo: {
    type: String,
    enum: ['public', 'fof', 'private'],
    default: 'private'
  },
  type: {
    type: String,
    enum: ['public', 'fof', 'private'],
    default: 'private'
  },
  description: String,
  leaders: [mongo.Types.ObjectId],
  // recurring: Boolean,
  // recurringType: {
  //   type: String,
  //   enum: ['weekly', 'monthly', 'yearly']
  // },
  // weekDay: {
  //   type: String,
  //   enum: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
  // },
  // week: {
  //   type: Number,
  //   min: 0,
  //   max: 5
  // },
  // month: {
  //   type: Number,
  //   min: 0,
  //   max: 12
  // }
});

module.exports = mongo.model('Event', eventSchema);
