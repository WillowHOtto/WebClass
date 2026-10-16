let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=1c5CCO0O7NPf2hZLyDKTo5dTEvEMVWeoUSW1ZOfg'

let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

fetch(apodApiUrl)
    .then( response => {
        return response.json()
    })
    .then( data => {
        console.log(data)
        // TODO - get title, explanation, video/image URL from response data
    })
    .catch (err => {
        console.log(err)
        apodExplanation.innerHTML = 'Sorry, could not fetch today\'s astronomy picture.'
    })


