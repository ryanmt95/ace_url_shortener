const URLSchema = require('../schemas/urlSchema')

class URLModel {
    static create(urlObject) {
        const { url, hashedURL, createdDate, expiryDate } = urlObject
        const urlEntity = new URLSchema({
            url: url,
            hashedURL: hashedURL,
            createdDate: createdDate,
            expiryDate: expiryDate
        })
        return urlEntity.save()
    }

    static find(hashedURL) {
        return URLSchema.findOne({ hashedURL, hashedURL }).exec()
    }
}

module.exports = URLModel