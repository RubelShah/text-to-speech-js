const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");


const utterance = new SpeechSynthesisUtterance();
playBtn.addEventListener('click',()=>{
    playtext(textInput.value);
});

utterance.addEventListener('end',()=>{
    textInput.disabled = false;
});
pauseBtn.addEventListener('click',pause);

stopBtn.addEventListener('click',stopUtterance)

function playtext(txt){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        speechSynthesis.resume();
    }
    if(speechSynthesis.speaking) return;
    utterance.text = txt;
    utterance.rate = speedInput.value || 1;
    textInput.disabled = true;
    speechSynthesis.speak(utterance);
};

function pause(){
    if(speechSynthesis.speaking) speechSynthesis.pause();
};

function stopUtterance(){
    speechSynthesis.cancel();
};