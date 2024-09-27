//declare localStream to contain stream video
let localStream;


//declear constraints is parameter of getUserMedia
let constraints = {
    video: true,
    audio: true
}

//feature: turn on webcam
//input: None
//process: 
//- wait device provide access to camera and audio and get media
//- if done,we use video node get by ID and assign srcObject = localStream  
//output: videostream display realtime on screen
let turnOn = async () => {
    try {
        //wait device provide access to camera and audio and get media
        localStream = await navigator.mediaDevices.getUserMedia(constraints);
        //we use video node get by ID and assign srcObject = localStream
        document.getElementById('video-webcam').srcObject = localStream;
    } catch (error) {
        //handle error if have exception
        console.log(error);
    }
} 

//feature: turn on webcam
//input: None
//process: 
//assign srcObject = null to off stream video  
//output: video stream was turned off
let turnOff = () => {
    //assign srcObject = null to off stream video  
    document.getElementById('video-webcam').srcObject = null;
}

//turn on is default
turnOn();

//query botton = selector
let btnElement = document.querySelector("#btn");

//add event to btnElement to change status on/off of button 
btnElement.addEventListener('click',()=> {
    //if srcObject === null then turn on cam and change "turn off" to "turn on"
    if (document.getElementById('video-webcam').srcObject === null) {
        btnElement.innerHTML = 'Turn off your cam';
        turnOn();
    //else: turn off
    } else{
        btnElement.innerHTML = 'Turn on your cam';
        turnOff();
    } 
})

