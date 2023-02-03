// ****************** OPTIONAL *************************
// INPUT BUTTONS:
var tvButton = document.querySelector("#tv");
var pcButton = document.querySelector("#pc");
var ps5Button = document.querySelector("#ps5");
var chromecastButton = document.querySelector("#chromecast");
// APP BUTTONS:
var netflixButton = document.querySelector("#netflix");
var disneyButton = document.querySelector("#disney");
var viaplayButton = document.querySelector("#viaplay");
var hboButton = document.querySelector("#hbo");
var discoveryButton = document.querySelector("#discovery");
var tv2Button = document.querySelector("#tv2");
var youtubeButton = document.querySelector("#youtube");
var spotifyButton = document.querySelector("#spotify");
// CONTROL BUTTONS:
var powerButton = document.querySelector("#power");
var volUpButton = document.querySelector("#volume-up");
var volDownButton = document.querySelector("#volume-down");
var hdrButton = document.querySelector("#hdr");
// TV SCREEN:
var tv__inside = document.querySelector(".tv__inside");

// ALTERNATE TV POWER ON/OFF
powerButton.onclick =  function alternatePower() {
  if(tv.tvIsOn === true) {
    console.log("The TV is on - Turning it off");
    tv.tvIsOn = false;
    console.log(tv.tvIsOn);
    powerButton.style.backgroundColor = "red";
    tv__inside.style.backgroundColor = "#111";
    tv__inside.innerHTML = "";
  } else {
    console.log("The TV is off - Turning it on");
    tv.tvIsOn = true;
    console.log(tv.tvIsOn);
    powerButton.style.backgroundColor = "green";
    tv__inside.style.backgroundColor = "darkgrey";
    tv__inside.innerHTML = "What do you want to watch?";
  }
}

tvButton.onclick
  if (tvButton.onclick === true) {
    tvButton.style.backgroundColor = "#CDCDCD";
  }

// var pcButton = document.querySelector("#pc");
// var ps5Button = document.querySelector("#ps5");
// var chromecastButton = document.querySelector("#chromecast");
