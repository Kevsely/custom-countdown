const inputContainer = document.getElementById("input-container")
const countdownForm = document.getElementById("countdownForm")
const dateEl = document.getElementById("date-picker")

//Set Date Input min with today's date
const today  = new Date().toISOString().split("T")[0]
dateEl.setAttribute("min", today)

// Take values from form input
function updateCountdown(e) {
    e.preventDefault()
    const countdownTitle = e.srcElement[0].value
    const countdownDate = e.srcElement[1].value
    console.log(countdownTitle, countdownDate)
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown)