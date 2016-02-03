var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Ground', new Schema({
  sportName: String,
  groundName: String,
  shortLocation: String,
  address: String
}));
