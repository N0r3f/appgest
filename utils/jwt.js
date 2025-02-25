const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

function signToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  signToken,
  verifyToken,
};
