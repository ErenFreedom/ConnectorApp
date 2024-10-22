const CryptoJS = require('crypto-js');
require('dotenv').config();

// Decrypts data using AES and the SECRET_KEY from the environment
function decryptData(data) {
    const bytes = CryptoJS.AES.decrypt(data, process.env.SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = { decryptData };
