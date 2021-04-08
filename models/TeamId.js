import mongoose from 'mongoose';

const TeamIdSchema = new mongoose.Schema({
  team_id: String,
  abbv: String,
});

module.exports = mongoose.model('TeamId', TeamIdSchema);