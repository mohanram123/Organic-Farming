var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var soilSchema = new Schema({
  soilType:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cropSchema'
  },
  desc: {
    type: String,
    required: true
  }
});

soilSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('soilSchema ', soilSchema);
