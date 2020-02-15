const mongo = require('mongoose');
const Comment = require('./Comment');
const Event = require('./Event');
const Fetish = require('./Fetish');
const Group = require('./Group');
const GroupPost = require('./GroupPost');
const Photo = require('./Photo');
const User = require('./User');
const Writing = require('./Writing');

describe('model tests', () => {
  
  it('new comment', () => {
    const comment = new Comment({
      owner: new mongo.Types.ObjectId,
      post: new mongo.Types.ObjectId,
      blurb: 'PushPin is amazing'
    });
    expect(comment.toJSON()).toEqual({
      _id: expect.any(mongo.Types.ObjectId),
      owner: comment.owner,
      post: comment.post,
      blurb: 'PushPin is amazing'
    });
  });
  
  it('new event', () => {
    const event = new Event({
      name: 'event name',
      state: 'OR',
      city: 'Portland',
      address: '4510 ne going',
      time: '2020-02-15T00:03:28.336Z',
      openTo: 'private',
      type: 'public',
      description: 'cool ass event',
      leaders: [
        new mongo.Types.ObjectId,
        new mongo.Types.ObjectId
      ],
      // recurring: true,
      // recurringType: 'monthly',
      // weekDay: 'mon',
      // week: 1,
    });
    expect(event.toJSON()).toEqual({
      _id: expect.any(mongo.Types.ObjectId),
      name: event.name,
      state: event.state,
      city: event.city,
      address: event.address,
      time: event.time,
      openTo: event.openTo,
      type: event.type,
      description: event.description,
      leaders: [
        expect.any(mongo.Types.ObjectId),
        expect.any(mongo.Types.ObjectId)
      ],
    });
  });
  
  it('new fetish', () => {
    const fetish = new Fetish({
      name: 'figging',
      description: 'not anything to do with figs'
    });
    expect(fetish.toJSON()).toEqual({
      _id: expect.any(mongo.Types.ObjectId),
      name: fetish.name,
      description: fetish.description,
      kinksters: expect.any(Array)
    });
  });
  
  it('new group', () => {
    const group = new Group({
      name: 'church',
      description: 'group of kneelers',
      members: [],
      owners: [mongo.Types.ObjectId],
      state: 'OR',
      city: 'Portland',
      hasEvents: true,
      type: 'fetish'
    });
    console.log(group.toJSON());
    expect(group.toJSON()).toEqual({
      _id: expect.any(mongo.Types.ObjectId),
      name: group.name,
      description: group.description,
      members: [],
      owners: [expect.any(mongo.Types.ObjectId)],
      state: group.state,
      city: group.city,
      hasEvents: group.hasEvents,
      type: group.type,
      flags: ['blood', 'scat', 'rape'],
      privacyLevel: 'private',
    });
  });

});
