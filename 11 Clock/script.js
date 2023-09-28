
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(()=>{
let day = new Date();
let hh = day.getHours()*30;
let mm = day.getMinutes()*6;
let ss = day.getSeconds()*6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
// digital

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";

// making it 12 hr clock 
if(h>12){
    h=h-12;
}

// to add 0 before single digit No.
h = (h < 10) ? "0" + h:
m = (m < 10) ? "0" + m:
s = (s < 10) ? "0" + s:

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;
})