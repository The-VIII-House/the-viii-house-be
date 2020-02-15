const mongo = require('mongoose');
const Schema = mongo.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  screenName: {
    type: String,
    required: true
  },
  birthday: {
    type: Date, 
    required: true
  },
  state: String,
  city: String,
  profilePic: { 
    data: Buffer,
    contentType: String
  },
  aboutMe: String,
  relationships: Array,
  orientation: String,
  gender: String,
  lookingFor: Array,
  role: String,
  fetishes: Array,
  limits: Array,
  profileAnonymity: {
    type: String,
    default: 'private',
    enum: ['private', 'friends', 'fof', 'private']
  },
  photoAnonymity: {
    type: String,
    default: 'private',
    enum: ['private', 'friends', 'fof', 'private']
  },
  fetishAnonymity: {
    type: String,
    default: 'private',
    enum: ['private', 'friends', 'fof', 'private']
  },
  searchable: {
    type: Boolean,
    default: false
  },
});

module.exports = mongo.model('User', userSchema);
