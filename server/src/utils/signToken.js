const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY || "some secret passphrase here for local development";
const signToken = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload,secret, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

module.exports = signToken;
