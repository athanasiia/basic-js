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
  constructor(notInverted = true) {
    this.notInverted = notInverted;
  }
  
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const keys = key.toUpperCase().split('').map(letter => alphabet.indexOf(letter));
    let keyIndex = 0;
    message = message.toUpperCase().split('');

    let encryptedMessage = [];
    let encryptedLetter;

    for (let i = 0; i < message.length; i++) {
    if (!alphabet.includes(message[i])) {
      encryptedMessage.push(message[i]);
      continue;
    }    
    encryptedLetter = alphabet[alphabet.indexOf(message[i]) + keys[keyIndex]];
    encryptedMessage.push(encryptedLetter);
    keyIndex = keyIndex == keys.length - 1 ? 0 : keyIndex + 1;
  }

    return this.notInverted ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const keys = key.toUpperCase().split('').map(letter => alphabet.indexOf(letter));
    let keyIndex = 0;
    encryptedMessage = encryptedMessage.toUpperCase().split('');

    let message = [];
    let letter;

    for (let i = 0; i < encryptedMessage.length; i++) {
    if (!alphabet.includes(encryptedMessage[i])) {
      message.push(encryptedMessage[i]);
      continue;
    }    
    letter = alphabet[alphabet.lastIndexOf(encryptedMessage[i]) - keys[keyIndex]];
    message.push(letter);
    keyIndex = keyIndex == keys.length - 1 ? 0 : keyIndex + 1;
  }

    return this.notInverted ? message.join('') : message.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
