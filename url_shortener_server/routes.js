const ShortenerController = require('./controllers/shortenerController')

module.exports = (app) => {
    app.post('/shortenURL', ShortenerController.getShortenedURL)
}