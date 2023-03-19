

export class Weather {
    constructor(data) {
        this.weather = data.weather["0"]
        this.temp = data.main.temp
        this.description = this.weather.description
        this.iconUrl = `https://openweathermap.org/img/wn/${this.weather.icon}.png`
        this.tempMeasurement = 'C'
    }

    kelvinToFahrenheit() {
        return Math.round(((this.kelvinToCelsius() * 1.8) + 32))
    }

    kelvinToCelsius() {
        return Math.round(this.temp - 273.15)
    }

    get weatherTemplate() {
        return `
        <div class="text-light text-center card bg-dark">
            <p onclick="app.weatherController.toggleDisplay()" class="fs-5">${this.tempMeasurement == 'C' ? this.kelvinToCelsius() : this.kelvinToFahrenheit()} ${this.tempMeasurement}</p>
            <p class="fs-6">${this.description}</p>
            <span><img src="${this.iconUrl}"></span>
          </div>
        `
    }
}