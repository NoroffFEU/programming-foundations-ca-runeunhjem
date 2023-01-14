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
var iframe__src = document.querySelector("#iframe");

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

// MAKE ARRAY OF ALL BUTTONS:
var allButtons = [
  tvButton, 
  pcButton, 
  ps5Button, 
  chomecastButton, 
  netflixButton,
  disneyButton,
  viaplayButton,
  hboButton,
  discoveryButton,
  tv2Button,
  youtubeButton,
  spotifyButton,
  powerButton,
  volUpButton,
  volDownButton,
  hdrButton  
];

function resetButtonBackgroundColor() {
  all
}


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

tvButton.onclick = function () {
  tvButton.style.backgroundColor = "#CDCDCD";
  tvButton.style.color = "#000";  
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "TV";
  console.log("After ===>", tv.activeTvSource);
}

pcButton.onclick = function () {
  pcButton.style.backgroundColor = "#CDCDCD";
  pcButton.style.color = "#000";  
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "PC";
  console.log("After ===>", tv.activeTvSource);
}
ps5Button.onclick = function () {
  ps5Button.style.backgroundColor = "#CDCDCD";
  ps5Button.style.color = "#000";  
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Playstation 5";
  console.log("After ===>", tv.activeTvSource);
}
chromecastButton.onclick = function () {
  chromecastButton.style.backgroundColor = "#CDCDCD";
  chromecastButton.style.color = "#000";  
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Chromecast";
  console.log("After ===>", tv.activeTvSource);
}
// tvButton.onclick = function activeButton() {
//   if (tv.activeTvSource === "TV") {
//     console.log("[Before setting activeButton]:", tv.activeButton);
//     tv.activeButton = "#tv";
//     tvButton.style.backgroundColor = "#CDCDCD";
//   } else if (tv.activeTvSource === "PC") {
//     console.log("[Before setting activeButton]:", tv.activeButton);
//     tv.activeButton = "#pc";
//     pcButton.style.backgroundColor = "#CDCDCD";
//   }
// }

// var pcButton = document.querySelector("#pc");
// var ps5Button = document.querySelector("#ps5");
// var chromecastButton = document.querySelector("#chromecast");
