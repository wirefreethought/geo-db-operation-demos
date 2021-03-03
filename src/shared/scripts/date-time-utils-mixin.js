export default {
  filters: {
    formatDateTime: function (dateTime) {
      const dateTimeString = JSON.stringify(dateTime)

      return dateTimeString.slice(1, dateTimeString.length - 1)
    },
    formatTimeZone: function (timeZone) {
      if (!timeZone) {
        return ''
      }

      return timeZone.replace('__', '/')
    }
  }
}
