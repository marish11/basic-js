const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const index = email.lastIndexOf('@');
  const domain = email.slice(index + 1, email.length);
  return domain;
}

module.exports = {
  getEmailDomain
};
