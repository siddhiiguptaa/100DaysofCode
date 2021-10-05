
require('dotenv').config()
// console.log(apiKey)

const count = 2
console.log(process.env)
// const API_KEY = process.env.API_KEY
// unsplash request url
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// getting photos using the api key

async function getPhotos(){
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log(data)
    }
    catch (err){
        console.log(`The following error occurred: ${err.message}`)
    }
}

// on page load

getPhotos()