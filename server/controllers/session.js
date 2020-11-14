const Session = require('../models/Session');

require('express-async-errors');

const getSession = async (req, res, next) => {
  try {
    res.send('hello world');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  //How to see this api: http://localhost:5000/api/session
};

const postSession = async (req, res, next) => {
  try {
    const newSession = new Session({
      //default info here
    });

    const session = await newSession.save();
    res.json(session);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getSession, postSession };
