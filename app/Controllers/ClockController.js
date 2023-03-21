import { appState } from "../AppState.js"

function _drawClock() {
    let elem = document.getElementById('clock')
    elem.innerHTML = appState.time
}

export class ClockController {
    constructor() {
        // appState.on('time', _drawClock)
        // appState.time = this.currentTime()
        setInterval(() => {
            clockElem.innerHTML = this.currentTime()
          }, 1000)
    }
    currentTime() {
        let date = new Date()
        let hh = date.getHours()
        let mm = date.getMinutes()
        let ss = date.getSeconds()
        let session = "AM"

        if (hh == 0) {
            hh = 12
        }
        if (hh > 12) {
            hh = hh - 12
            session = "PM"
        }

        mm = (mm < 10) ? "0" + mm : mm
        ss = (ss < 10) ? "0" + ss : ss
        let time = hh + ":" + mm + ":" + ss + " " + session
        return time
    }
}