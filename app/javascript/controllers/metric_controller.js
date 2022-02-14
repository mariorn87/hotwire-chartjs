import { Controller } from "@hotwired/stimulus"
import getRandomColor from '../utils'
import { options, scalesPerDay, scalesPerHour, scalesPerMinute } from '../constants/chartOptions'

export default class extends Controller {
  static targets = ['chartPerDays','chartPerHours','chartPerMinutes']

  canvasPerDaysContext() { return this.chartPerDaysTarget.getContext('2d'); }
  canvasPerHoursContext() { return this.chartPerHoursTarget.getContext('2d'); }
  canvasPerMinutesContext() { return this.chartPerMinutesTarget.getContext('2d'); }
  
  connect() {
    new Chart(this.canvasPerDaysContext(), {
      type: 'line',
      data: {        
        datasets: this.datasets(this.dataPerDay())
      },
      options: {...options, scales: {...scalesPerDay } }
    })
    new Chart(this.canvasPerHoursContext(), {
      type: 'line',
      data: {        
        datasets: this.datasets(this.dataPerHour())
      },
      options: {...options, scales: {...scalesPerHour } } 
    })
    new Chart(this.canvasPerMinutesContext(), {
      type: 'line',
      data: {        
        datasets: this.datasets(this.dataPerMinute())
      },
      options: {...options, scales: {...scalesPerMinute } } 
    })
  }

  dataPerDay() {
    return JSON.parse(document.querySelector('[data-data-per-day]').dataset.dataPerDay)
  }
  dataPerHour() {
    return JSON.parse(document.querySelector('[data-data-per-hour]').dataset.dataPerHour)
  }
  dataPerMinute() {
    return JSON.parse(document.querySelector('[data-data-per-minute]').dataset.dataPerMinute)
  }

  datasets(events) {
    return events.map(event => {
      const parsedData = event.data.map(eventData => {
        return { x: new Date(eventData.x) , y: eventData.y }
      })

      const color = getRandomColor()
      return {
        label: event.name,
        borderColor: color,
        backgroundColor: color,
        borderWidth: 1,
        radius: 0,
        data: parsedData,
        spanGaps: true,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10
      }
    })
  }
}
