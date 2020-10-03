const URLController = require('./controllers/urlController')

module.exports = (app) => {
    app.post('/shortenURL', URLController.getShortenedURL)
}