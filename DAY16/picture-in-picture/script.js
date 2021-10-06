// getting the element from html
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select the media stream, pass to the video element, then play the

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()

        }
    } catch (error) {
        console.log('media stream error: ' + error)
    }
}

// event listener for the button to hide the video element by click event method
button.addEventListener('click',async () => {
    // disable button
    button.disabled = true
    // start picture in picture
    await videoElement.requestPictureInPicture()
    button.disabled = false

})

// on load complete

selectMediaStream()