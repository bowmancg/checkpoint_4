import { appState } from "../AppState.js";
import { weatherApi } from "./AxiosService.js";
import { Weather } from "../Models/Weather.js";

class WeatherService {
    async getWeather() {
        const res = await weatherApi.get('')
        appState.weather = new Weather(res.data)
    }

    toggleTemp() {
        if (appState.weather.tempMeasurement == 'C') {
            appState.weather.tempMeasurement = 'F'
        } else {
            appState.weather.tempMeasurement = 'C'
        }
        appState.emit("weather")        
    }
}

export const weatherService = new WeatherService()