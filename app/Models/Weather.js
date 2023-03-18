

export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.description = data.weather["0"].description
    }

    get weatherTemp() {

    }
}