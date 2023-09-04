// var currentTime = new Date()
// var currentHours = currentTime.getHours()
// var currentMinutes = currentTime.getMinutes()
// var currentSeconds = currentTime.getSeconds()

class ClockService {
    getTime() {
        var currentTime = new Date()
        var currentHours = currentTime.getHours()
        var currentMinutes = currentTime.getMinutes()
        var currentSeconds = currentTime.getSeconds()
        var timeOfDay = (currentHours < 12) ? "AM" : "PM"
        currentHours = (currentHours == 0) ? 12 : (currentHours > 12) ? currentHours - 12 : currentHours
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + timeOfDay
        document.getElementById("clock").textContent = currentTimeString

    }


}

export const clockService = new ClockService()