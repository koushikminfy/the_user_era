const Vibe = require('../models/Vibe');

exports.postVibe = async (req, res) => {
  try {
    const { vibeText, mood } = req.body;
    const vibe = await Vibe.create({
      vibeText,
      mood,
      user: req.user._id,
    });
    res.status(201).json(vibe);
  } catch (err) {
    res.status(400).json({ message: 'Vibe creation failed', error: err.message });
  }
};

exports.getVibes = async (req, res) => {
  const vibes = await Vibe.find().populate('user', 'username');
  res.status(200).json(vibes);
};
