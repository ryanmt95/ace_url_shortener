const crypto = require('crypto')

class HashService {

    static getShortenedURL(url, date) {
        const hash = crypto.createHash('md5')
        const hashedURL = hash.update(url + date).digest('hex')
        return hashedURL.slice(0, 8)
    }
}

module.exports = HashService