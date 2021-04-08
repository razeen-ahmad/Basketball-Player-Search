import mongoose from 'mongoose';

const PlayerClickCountSchema = new mongoose.Schema({
  player_id: String,
  clicks: Number,
});

module.exports = mongoose.model('PlayerClickCount', PlayerClickCountSchema);