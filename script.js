const inputContainer = document.getElementById("input-container")
const countdownForm = document.getElementById("countdownForm")
const dateEl = document.getElementById("date-picker")

const countdownEl = document.getElementById("countdown")
const countdownElTitle = document.getElementById("countdown-title")
const countdonwBtn = document.getElementById("countdown-button")
const timeElements = document.querySelectorAll("span")

let countdownTitle = ""
let countdownDate = ""
let countdonwValue = Date
let countdownActive

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

//Set Date Input min with today's date
const today  = new Date().toISOString().split("T")[0]
dateEl.setAttribute("min", today)

// Populate Countdown / Complete UI
function updateDOM() {
    countdownActive =  setInterval(() => {
        const now = new Date().getTime()
        const distance = countdonwValue - now 

        const days = Math.floor(distance / day)
        const hours = Math.floor((distance % day) / hour)
        const minutes = Math.floor((distance % hour) / minute)
        const seconds = Math.floor((distance % minute) / second)

        //Populate countdown 
        countdownElTitle.textContent = `${countdownTitle}`
        timeElements[0].textContent = `${days}`
        timeElements[1].textContent = `${hours}`
        timeElements[2].textContent = `${minutes}`
        timeElements[3].textContent = `${seconds}`

        //Hide Input
        inputContainer.hidden = true
        //Show Countdown 
        countdownEl.hidden = false
    }, second)
}

// Take values from form input
function updateCountdown(e) {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value
    console.log(countdownTitle, countdownDate)
    // Get number version of current Date, update DOM
    countdonwValue = new Date(countdownDate).getTime()
    updateDOM()
}

// Reset the countdown and back the the main div
function reset() {
    //Switch the the appropriate menu
    countdownEl.hidden = true
    inputContainer.hidden = false 
    //Stop counting down
    clearInterval(countdownActive)
    //Reset the used variables. 
    countdownTitle = ""
    countdownDate = ""
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown)
countdonwBtn.addEventListener("click", reset)