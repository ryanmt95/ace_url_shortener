const crypto = require('crypto')

class HashService {

    static hash = crypto.createHash('md5')

    static getShortenedURL(url) {
        // const hashedURL = this.hash.update(url).digest('hex')
        return url
    }
}

module.exports = HashService