const crypto = require('crypto')

class HashService {

    static hash = crypto.createHash('md5')

    static getShortenedURL(url) {
        return url
    }
}

module.exports = HashService