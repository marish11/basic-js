const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  domains.forEach(domain => {
    const reversedArr = domain.split('.').reverse();
    const dotArr = reversedArr.map(el => el = '.' + el);
    let dnsArr = [];

    for (let i = 1; i <= dotArr.length; i++) {
      dnsArr.push(dotArr.slice(0, i).join(''));
    }

    dnsArr.forEach(element => {
      obj[element] = (obj[element] || 0) + 1;
    });
  });

  return obj;
}

module.exports = {
  getDNSStats
};
