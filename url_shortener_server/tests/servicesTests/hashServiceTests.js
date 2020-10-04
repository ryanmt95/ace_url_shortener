const { assert } = require('chai')

const HashService = require('../../services/hashService')


const url = "https://google.com"
const currentDate = new Date()

describe('Test hash service', function () {
    describe('getShortenedURL()', function () {
        it('should return hashed string of size 8 for a given url and date', function () {
            const expectedLength = 8
            const hashedString = HashService.getShortenedURL(url, currentDate)

            assert.lengthOf(hashedString, expectedLength)
        })

        it('should return a different hashed string even if the input URL remains the same', function () {

            setInterval(() => {
                const currentDate2 = null

                const hashedString1 = HashService.getShortenedURL(url, currentDate)
                const hashedString2 = HashService.getShortenedURL(url, currentDate2)

                assert.notEqual(hashedString1, hashedString2)
            }, 1000)
        })
    })
})
