module.exports = (req, res) => {
  res.json({ token: process.env.MAPBOX_TOKEN });
};
