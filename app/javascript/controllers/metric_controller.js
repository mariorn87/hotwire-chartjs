import { Controller } from "@hotwired/stimulus"
import getRandomColor from '../utils'
import { optionsPerDay, optionsPerHour, optionsPerMinute } from '../constants/chartOptions'

export default class extends Controller {
  static targets = ['chartPerDays','chartPerHours','chartPerMinutes']
  // Don't look at me, it's a transitional decision 🙈
  colors = {}

  canvasPerDaysContext() { return this.chartPerDaysTarget.getContext('2d'); }
  canvasPerHoursContext() { return this.chartPerHoursTarget.getContext('2d'); }
  canvasPerMinutesContext() { return this.chartPerMinutesTarget.getContext('2d'); }
  
  connect() {
    new Chart(this.canvasPerDaysContext(), {
      type: 'line',
      data: { datasets: this.datasets(this.dataPerDay()) },
      options: optionsPerDay
    })
    new Chart(this.canvasPerHoursContext(), {
      type: 'line',
      data: { datasets: this.datasets(this.dataPerHour()) },
      options: optionsPerHour
    })
    new Chart(this.canvasPerMinutesContext(), {
      type: 'line',
      data: { datasets: this.datasets(this.dataPerMinute()) },
      options: optionsPerMinute
    })
  }

  getColorFor(eventName) {
    if (eventName in this.colors) return this.colors[eventName]

    this.colors[eventName] = getRandomColor()
    return this.colors[eventName]
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
        return { ...eventData }
      })
      const color = this.getColorFor(event.name)
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
