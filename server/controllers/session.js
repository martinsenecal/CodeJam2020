require('express-async-errors');

const getSession = async (req, res, next) => {
  res.send('Hello World!');
  //How to see this api: http://localhost:5000/api/session
};

const postSession = async (req, res, next) => {};

module.exports = { getSession, postSession };
