export const options = {
  responsive: false,
  interaction: {
    intersect: false
  }
}

export const pluginsPerDay = {
  legend: {
    position: 'top',
  },
  title: {
    display: true,
    text: 'Trainings per day'
  }
}

export const pluginsPerHour = {
  legend: {
    position: 'top',
  },
  title: {
    display: true,
    text: 'Trainings per hour'
  }
}

export const pluginsPerMinute = {
  legend: {
    position: 'top',
  },
  title: {
    display: true,
    text: 'Trainings per minute'
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

export const optionsPerDay = {
  ...options, 
  scales: {...scalesPerDay },
  plugins: { ...pluginsPerDay }
}

export const optionsPerHour = {
  ...options, 
  scales: {...scalesPerHour },
  plugins: { ...pluginsPerHour }
}

export const optionsPerMinute = {
  ...options, 
  scales: {...scalesPerMinute },
  plugins: { ...pluginsPerMinute }
}