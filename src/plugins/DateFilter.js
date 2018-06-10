import format from 'date-fns/format'
const dateFilter = {
  install (Vue) {
    Vue.filter('formatDate', (value, dateFormat = 'HH:mm - DD/MM/YYYY ') => {
      return format(value, dateFormat)
    })
  }
}

export default dateFilter
