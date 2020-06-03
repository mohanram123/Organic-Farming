var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var cropSchema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: true
  },
  soilType:{
    type: String,
    required: true
  },
  season:   {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

cropSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('cropSchema ', cropSchema);
