const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateEl = document.getElementById('date-picker')

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title')
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span')

let countdownTitle = ''
let countdownDate = ''
let countdownValue = Date

let countdownActive

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute
const day = 24 * hour
// setting input date as todays input
const dateToday = new Date().toISOString().split("T")[0]

dateEl.setAttribute('min', dateToday)

// populate the countdown UI

function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownValue - now
        console.log(`inside the update dom`)
        const days = Math.floor(distance / day)
        const hours = Math.floor((distance % day)/hour)
        const minutes = Math.floor((distance % hour)/minute)
        const seconds = Math.floor((distance % minute)/second)

        console.log( days, hours, minutes, seconds )

        // populate countdown
        countdownElTitle.textContent = `${countdownTitle}`
        timeElements[0].textContent = `${days}:`
        timeElements[1].textContent = `${hours}:`
        timeElements[2].textContent = `${minutes}:`
        timeElements[3].textContent = `${seconds}`

        // hide input
        inputContainer.hidden = true;
        
        // show countdown
        countdownEl.hidden= false
    },second)
    
}

//take values from input
function updateCountdown(evt){
    evt.preventDefault();
    countdownTitle = evt.srcElement[0].value
    countdownDate = evt.srcElement[1].value
    console.log(countdownTitle, countdownDate)

    // check for valid date
    if(countdownDate === ''){
        alert('select the date to continue')
    }
    else{
      // get the number value of the current date, updateDOM
      countdownValue = new Date(countdownDate).getTime();
      console.log(countdownValue);
      updateDOM();
    }
} 

// reset all 
function reset(){
    // hide countdown and show input
    countdownEl.hidden = true
    inputContainer.hidden = false

    // stop the countdown
    clearInterval(countdownActive)

    // reset values
    countdownTitle = ''
    countdownDate = ''
}
//event listeners handle form submission
countdownForm.addEventListener('submit',updateCountdown)
countdownBtn.addEventListener("click", reset)
