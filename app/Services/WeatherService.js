import { appState } from "../AppState.js";
import { weatherApi } from "./AxiosService.js";
import { Weather } from "../Models/Weather.js";

class WeatherService {
    async getWeather() {
        const res = await weatherApi.get('')
        appState.weather = new Weather(res.data)
    }

    toggleTemp() {
        let newWeather = {...appState.weather }
        if (appState.weather.tempMeasurement == 'C') {
            newWeather.tempMeasurement = 'F'
            // appState.weather.tempMeasurement = 'F'
        } else {
            newWeather.tempMeasurement = 'C'
            // appState.weather.tempMeasurement = 'C'
        }
        appState.weather = newWeather
        console.log('toggle temp', appState.weather);
    }
}

export const weatherService = new WeatherService()