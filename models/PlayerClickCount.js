import mongoose from 'mongoose';

const PlayerClickCountSchema = new mongoose.Schema({
  player_id: String,
  clicks: Number,
});

//export default mongoose.models.PlayerClickCount || mongoose.model('PlayerClickCount', PlayerClickCountSchema);
module.exports = mongoose.model('PlayerClickCount', PlayerClickCountSchema);