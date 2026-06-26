const target = new Date("July 20, 2026 00:00:00 GMT+0600").getTime();

const timer = setInterval(() => {

const now = new Date().getTime();

const distance = target - now;

if(distance < 0){

clearInterval(timer);

document.getElementById("countdown").style.display="none";

document.getElementById("message").innerHTML=
"🎉 SSC 2026 Results are Out!";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

},1000);
