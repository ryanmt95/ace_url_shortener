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
}

module.exports = TimeService