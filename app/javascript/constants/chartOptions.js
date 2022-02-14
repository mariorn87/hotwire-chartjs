export const options = {
  responsive: false,
  interaction: {
    intersect: false
  },
  plugins: {
    legend: true
  }
}

export const scalesPerDay = {
  x: {
    type: 'time',
    time: { 
      unit: 'day', 
      displayFormats: {
        'day': 'MMM DD'
      }
    }
  },
  y: {
    ticks: {
      precision:0
    }
  }
}

export const scalesPerHour = {
  x: {
    type: 'time',
    time: { 
      unit: 'hour', 
      displayFormats: {
        'hour': 'MMM DD HH:mm'
      }
    }
  },
  y: {
    ticks: {
      precision:0
    }
  }
}

export const scalesPerMinute = {
  x: {
    type: 'time',
    time: { 
      unit: 'minute',
      displayFormats: {
        'minute': 'MMM DD HH:mm'
      }
    }
  },
  y: {
    ticks: {
      precision:0
    }
  }
}