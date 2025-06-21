const mongoose = require('mongoose');

const vibeSchema = new mongoose.Schema({
  vibeText: { type: String, required: true },
  mood: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Vibe', vibeSchema);
