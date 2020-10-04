const URLController = require('./controllers/urlController')

module.exports = (app) => {
    app.post('/shortenURL', URLController.getShortenedURL)
    app.get('/url/:hashedURL', URLController.getURL)
}