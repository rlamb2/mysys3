/**
 * Stuff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    game: {
      model: 'game',
      required: true
    },
    location: {
      type: 'string',
      defaultsTo: '0.0'
    },
    itemId: {
      type: 'string'
    },
    something: {
      type: 'string'
    },
    dropKey: {
      type: 'string',
      required: true,
      unique: true
    }
  }
};

