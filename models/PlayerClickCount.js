var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PlayerClickCountSchema = new Schema({
  player_id: String,
  clicks: Number,
});

module.exports = mongoose.model('PlayerClickCount', PlayerClickCountSchema);