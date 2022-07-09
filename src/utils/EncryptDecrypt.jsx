import CryptoJS from 'crypto-js'

let salt = '6d090796-ecdf-11ea-adc1-0242ac120003'

/**
 * This function encrypt the data and return the encrypted data
 *
 * @param {Object | String} data
 * @returns encrypted data
 */

export const encryptData = data => {
  if (typeof data === 'object') {
    return CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString()
  }
  return CryptoJS.AES.encrypt(data, salt).toString()
}

/**
 * This function decrypt the encrypted data and return the decrypted object data
 *
 * @param {Object} data
 * @returns {Object} decrypted object data
 */

export const decryptObjData = cypherData => {
  try {
    if (cypherData) {
      const bytes = CryptoJS.AES.decrypt(cypherData, salt)
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }
  } catch (error) {
    // If the encrypted data is invalid
    if (error.message === 'Malformed UTF-8 data') {
      localStorage.removeItem('user_auth')
    }
    return null
  }
}

/**
 * This function decrypt the encrypted data and return the decrypted string.
 *
 * @param {Object} data
 * @returns {String} decrypted string
 */

export const decryptData = cypherData => {
  try {
    if (cypherData) {
      const bytes = CryptoJS.AES.decrypt(cypherData, salt)
      return bytes.toString(CryptoJS.enc.Utf8)
    }
  } catch (error) {
    return null
  }
}
