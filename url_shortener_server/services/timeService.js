class TimeService {

    static getCurrentDateTime() {
        const date = new Date()
        return date
    }

    static getFutureDateTime(date, days) {
        var date = new Date()
        date.setDate(date.getDate() + days)
        return date
    }

    static dateToString(date) {
        const dateString = `${date.getYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
        return dateString
    }

    static checkExpiryDate(date) {
        const currentDate = new Date()
        if (currentDate < date) {
            return false
        } else {
            return true
        }
    }
}

module.exports = TimeService