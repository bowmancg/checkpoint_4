import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {
    const weather = appState.weather
    setHTML('weather-box', weather.weatherTemplate)
}

export class WeatherController {
    constructor() {
        
        appState.on('weather', _drawWeather)
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }

    toggleDisplay() {
        weatherService.toggleTemp()
    }
}