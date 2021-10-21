const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateEl = document.getElementById('date-picker')

let countdownTitle = ''
let countdownDate = ''

// setting input date as todays input
const today = new Date().toISOString().split("T")[0]

dateEl.setAttribute('min', today)

//take values from input
function updateCountdown(evt){
    console.log(evt);
    evt.preventDefault();
    countdownTitle = evt.srcElement[0].value
    countdownDate = evt.srcElement[1].value
    console.log(countdownTitle, countdownDate)
} 

//event listeners handle form submission
countdownForm.addEventListener('submit',updateCountdown)
