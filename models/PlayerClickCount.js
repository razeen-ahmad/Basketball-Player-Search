var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PlayerClickCountSchema = new Schema({
  player_id: String, //id from balldontlie api
  clicks: Number,   //number of times this player's page is loaded or "clicked" on.
  first_name: String,
  last_name: String,
  team: String
});

module.exports = mongoose.models.PlayerClickCount || mongoose.model('PlayerClickCount', PlayerClickCountSchema);