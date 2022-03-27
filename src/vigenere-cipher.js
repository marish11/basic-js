const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    const times = Math.ceil(message.length / key.length);

    if (key.length < message.length) {
      key = key.repeat(times);
    }
    key = key.slice(0, message.length);

    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const abcCount = 26;

    let result = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!abc.includes(message[i])) {
        result.push(message[i]);
      } else {
        result.push(abc[(abc.indexOf(message[i]) + abc.indexOf(key[j])) % abcCount]);
        j++;
      }
    }

    return (this.direct) ? result.join('') : result.reverse().join('');
}

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const times = Math.ceil(encryptedMessage.length / key.length);

    if (key.length < encryptedMessage.length) {
      key = key.repeat(times);
    }
    key = key.slice(0, encryptedMessage.length);

    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const abcCount = 26;

    let result = [];

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (!abc.includes(encryptedMessage[i])) {
        result.push(encryptedMessage[i]);
      } else {
        result.push(abc[(abc.indexOf(encryptedMessage[i]) - abc.indexOf(key[j]) + abcCount) % abcCount]);
        j++;
      }
    }

    return (this.direct) ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
