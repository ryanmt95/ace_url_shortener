const HashService = require('../services/hashService')
const TimeService = require('../services/timeService')
const URLModel = require('../models/urlModel')

class URLController {

    static getShortenedURL(req, res) {
        var { url } = req.body

        const linkValidityInDays = 2
        const createdDate = TimeService.getCurrentDateTime()
        const expiryDate = TimeService.getFutureDateTime(createdDate, linkValidityInDays)
        const hashedURL = HashService.getShortenedURL(url, TimeService.dateToString(createdDate))

        const urlObject = {
            url: url,
            hashedURL: hashedURL,
            createdDate: createdDate,
            expiryDate: expiryDate
        }
        URLModel.create(urlObject)
            .then(result => {
                console.log(result)
                res.status(200).send({ hashedURL: hashedURL })
            })
            .catch(err => {
                console.log(err)
                res.status(500).send({ error: "Could not create URLObject in Mongo Databse" })
            })
    }

    static getURL(req, res) {
        const hashedURL = req.params.hashedURL
        URLModel.find(hashedURL)
            .then(doc => {
                if (doc == null) {
                    res.status(404).send({ message: "No valid URL found for provided hashed URL" })
                } else {
                    const { url, expiryDate } = doc
                    if (TimeService.checkExpiryDate(expiryDate)) {
                        res.status(404).send({ message: "hashed URL link has expired" })
                    } else {
                        res.status(200).redirect(url)
                    }
                }
            })
            .catch(err => {
                res.status(500).send({ error: err })
            })
    }
}

module.exports = URLController