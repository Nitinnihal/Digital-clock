const hrEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function clock(){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";

    if(hr > 12){
        hr = hr - 12;
        ampm = "PM";
    }

    hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

    hrEl.innerText = hr;
    minEl.innerText = min;
    secEl.innerText = sec;
    ampmEl.innerText = ampm;

    setTimeout(()=>{
        clock();

    },1000)

}

clock();