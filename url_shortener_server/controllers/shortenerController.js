const HashService = require('../services/hashService')

class ShortenerController {

    static getShortenedURL(req, res) {
        var { url } = req.body

        var shortened_url = HashService.getShortenedURL(url)

        res.status(200).send({ shortened_url: shortened_url })
    }
}

module.exports = ShortenerController