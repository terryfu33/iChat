const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY || "some secret passphrase here for local development";
const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });

module.exports = verifyToken;
