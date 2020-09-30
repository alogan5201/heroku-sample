const { Schema } = mongoose = require('mongoose');

const clientSchema = new Schema({
  name: String,
  time: String
});

module.exports = mongoose.model('Client', clientSchema);