var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PlayerClickCountSchema = new Schema({
  player_id: String,
  clicks: Number,
  first_name: String,
  last_name: String,
  team: String
});

module.exports = mongoose.models.PlayerClickCount || mongoose.model('PlayerClickCount', PlayerClickCountSchema);