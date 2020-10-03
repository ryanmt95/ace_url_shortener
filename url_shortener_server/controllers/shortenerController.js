const HashService = require('../services/hashService')
const TimeService = require('../services/timeService')

class ShortenerController {

    static getShortenedURL(req, res) {
        var { url } = req.body

        const linkValidityInDays = 2
        const createdDate = TimeService.getCurrentDateTime()
        const expiryDate = TimeService.getFutureDateTime(createdDate, linkValidityInDays)

        var shortened_url = HashService.getShortenedURL(url, TimeService.dateToString(createdDate))

        res.status(200).send({ shortened_url: shortened_url })
    }
}

module.exports = ShortenerController