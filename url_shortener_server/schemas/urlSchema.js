const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema(
    {
        hashedURL: {
            type: String,
            unique: true,
            required: true
        },

        url: {
            type: String,
            unique: false,
            required: true
        },

        createdDate: {
            type: Date,
            unique: false,
            required: true
        },

        expiryDate: {
            type: Date,
            unique: false,
            required: true
        }
    },
    { collection: 'URLs' }
)

const URLSchema = mongoose.model('GovTech_AceProject', urlSchema)

module.exports = URLSchema