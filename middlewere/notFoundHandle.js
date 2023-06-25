const notfound = (req, res, next) => {
  return res.status(404).json("Path Not Found");
};

module.exports = notfound;
