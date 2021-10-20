function increment(){
    let number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number + 1
}
function decrement(){
    let number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number - 1
}
function zero(){
    document.getElementById('number').innerHTML = 0
}