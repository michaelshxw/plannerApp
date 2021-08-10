const jwt = require('jsonwebtoken');

const secret = 'donttellanyonethissecretorelseyoullbecursedfortherestofyourlife';
const expiration = '1h';

module.exports = {
  authMiddleware: function ({ req }) {
    // code here
  },
  
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};