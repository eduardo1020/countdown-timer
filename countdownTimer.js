let countdownDate = new Date("April 30, 2021 18:00:00").getTime()

let countdown = setInterval(function() {

    //captura a data e a hora atual
    let now = new Date().getTime()

    //define a distancia entre a data atual e a data do fim
    let distance = countdownDate - now

    //calcula os dias, horas, minutos e segundos para atingir a data final
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(distance % (1000 * 60) / 1000)

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    if(distance <= 0) {
        clearInterval(countdown)

        document.getElementById("days").innerHTML = 0
        document.getElementById("hours").innerHTML = 0
        document.getElementById("minutes").innerHTML = 0
        document.getElementById("seconds").innerHTML = 0
        let text = document.createElement("P")
        text.innerText = "EXPIRED"
        document.getElementById("countdown-timer").appendChild(text)
    }
    
}, 1000)

console.log(countdown)